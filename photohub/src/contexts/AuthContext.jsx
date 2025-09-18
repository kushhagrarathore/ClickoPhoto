import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient'
import { dummyProfiles } from '@/lib/dummyData'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isDummyMode, setIsDummyMode] = useState(!isSupabaseConfigured())

  // Initialize auth state
  useEffect(() => {
    if (isDummyMode) {
      // In dummy mode, start with no user (don't auto-login)
      setUser(null)
      setProfile(null)
      setLoading(false)
      return
    }

    // Get initial session
    const getInitialSession = async () => {
      try {
        // 1) Hydrate from localStorage if available (ensures refresh token exists after reload)
        if (typeof window !== 'undefined') {
          const saved = localStorage.getItem('supabase_session')
          if (saved) {
            try {
              const parsed = JSON.parse(saved)
              if (parsed?.access_token && parsed?.refresh_token) {
                await supabase.auth.setSession({
                  access_token: parsed.access_token,
                  refresh_token: parsed.refresh_token,
                })
              }
            } catch (e) {
              console.warn('Failed to parse saved supabase session:', e)
            }
          }
        }

        // 2) Ask Supabase for the current (possibly hydrated) session
        const { data: { session } } = await supabase.auth.getSession()
        if (session?.user) {
          setUser(session.user)
          await fetchProfile(session.user.id)
        } else {
          setUser(null)
          setProfile(null)
        }
      } catch (error) {
        console.error('Error getting initial session:', error)
        setUser(null)
        setProfile(null)
      }
      setLoading(false)
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.debug('Auth state changed:', event, session?.user?.email)
        if (session?.user) {
          setUser(session.user)
          await fetchProfile(session.user.id)
          // Persist session (includes refresh token)
          if (typeof window !== 'undefined') {
            try {
              localStorage.setItem('supabase_session', JSON.stringify({
                access_token: session.access_token,
                refresh_token: session.refresh_token,
                expires_at: session.expires_at,
                token_type: session.token_type,
                user: session.user,
              }))
            } catch (e) {
              console.warn('Failed to persist supabase session:', e)
            }
          }
        } else {
          setUser(null)
          setProfile(null)
          if (typeof window !== 'undefined') {
            localStorage.removeItem('supabase_session')
          }
        }
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [isDummyMode])

  // Fetch user/host profile and determine role
  const fetchProfile = async (authUserId) => {
    try {
      // Try host profile first
      const { data: hostProfile, error: hostErr } = await supabase
        .from('host_profiles')
        .select('id, user_id, email, full_name, avatar_url, business_name, is_verified')
        .eq('user_id', authUserId)
        .maybeSingle()

      if (hostErr) {
        console.warn('Host profile lookup error:', hostErr.message)
      }

      if (hostProfile) {
        setProfile({ ...hostProfile, role: 'host' })
        return
      }

      // Fallback to user profile
      const { data: userProfile, error: userErr } = await supabase
        .from('user_profiles')
        .select('id, user_id, email, full_name, avatar_url, phone, location, is_verified')
        .eq('user_id', authUserId)
        .maybeSingle()

      if (userErr) {
        console.warn('User profile lookup error:', userErr.message)
      }

      if (userProfile) {
        setProfile({ ...userProfile, role: 'customer' })
      } else {
        setProfile(null)
      }
    } catch (error) {
      console.error('Error fetching profile:', error)
    }
  }

  // Sign up with role selection
  const signUp = async ({ email, password, fullName, role }) => {
    if (isDummyMode) {
      // Simulate signup in dummy mode
      const newUser = {
        id: Date.now().toString(),
        email,
        full_name: fullName,
        role,
        avatar_url: null,
        bio: '',
        location: '',
        rating: null,
        review_count: 0,
        created_at: new Date().toISOString(),
      }
      setUser(newUser)
      setProfile(newUser)
      return { user: newUser, error: null }
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })

      if (error) throw error

      // Create profile in the appropriate table
      if (data.user) {
        if (role === 'host') {
          const { error: profileError } = await supabase
            .from('host_profiles')
            .insert([
              {
                user_id: data.user.id,
                email,
                full_name: fullName,
                is_verified: false,
              },
            ])
          if (profileError) throw profileError
        } else {
          const { error: profileError } = await supabase
            .from('user_profiles')
            .insert([
              {
                user_id: data.user.id,
                email,
                full_name: fullName,
                is_verified: false,
              },
            ])
          if (profileError) throw profileError
        }
      }

      return { user: data.user, error: null }
    } catch (error) {
      return { user: null, error: error.message }
    }
  }

  // Sign in
  const signIn = async ({ email, password }) => {
    if (isDummyMode) {
      // Simulate signin in dummy mode
      const dummyUser = dummyProfiles.find(p => p.email === email)
      if (dummyUser) {
        setUser(dummyUser)
        setProfile(dummyUser)
        return { user: dummyUser, error: null }
      }
      return { user: null, error: 'Invalid credentials' }
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error
      return { user: data.user, error: null }
    } catch (error) {
      return { user: null, error: error.message }
    }
  }

  // Sign out
  const signOut = async () => {
    try {
      if (isDummyMode) {
        setUser(null)
        setProfile(null)
        return { error: null }
      }

      const { error } = await supabase.auth.signOut()
      if (error) throw error
      
      // Clear local state after successful signout
      setUser(null)
      setProfile(null)
      if (typeof window !== 'undefined') {
        try {
          // Remove our manual session storage
          localStorage.removeItem('supabase_session')
          // Also remove any Supabase SDK tokens (keys usually start with 'sb-')
          const keysToRemove = []
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            if (key && key.startsWith('sb-') && key.includes('auth')) {
              keysToRemove.push(key)
            }
          }
          keysToRemove.forEach((k) => localStorage.removeItem(k))
        } catch (e) {
          console.warn('Failed to clear localStorage tokens:', e)
        }
      }
      
      return { error: null }
    } catch (error) {
      console.error('Signout failed:', error)
      // Attempt local cleanup even if remote signout failed
      try {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('supabase_session')
          const keysToRemove = []
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            if (key && key.startsWith('sb-') && key.includes('auth')) {
              keysToRemove.push(key)
            }
          }
          keysToRemove.forEach((k) => localStorage.removeItem(k))
        }
      } catch {}
      return { error: error.message }
    }
  }

  // Update profile (writes to the correct table based on role)
  const updateProfile = async (updates) => {
    if (isDummyMode) {
      const updatedProfile = { ...profile, ...updates }
      setProfile(updatedProfile)
      setUser(updatedProfile)
      return { data: updatedProfile, error: null }
    }

    try {
      if (profile?.role === 'host') {
        const { data, error } = await supabase
          .from('host_profiles')
          .update(updates)
          .eq('user_id', user.id)
          .select()
          .single()
        if (error) throw error
        setProfile({ ...data, role: 'host' })
        return { data, error: null }
      } else {
        const { data, error } = await supabase
          .from('user_profiles')
          .update(updates)
          .eq('user_id', user.id)
          .select()
          .single()
        if (error) throw error
        setProfile({ ...data, role: 'customer' })
        return { data, error: null }
      }
    } catch (error) {
      return { data: null, error: error.message }
    }
  }

  // Update password
  const updatePassword = async (currentPassword, newPassword) => {
    if (isDummyMode) {
      return { error: null }
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      })
      
      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error: error.message }
    }
  }

  // Update email
  const updateEmail = async (newEmail, currentPassword) => {
    if (isDummyMode) {
      const updatedUser = { ...user, email: newEmail }
      setUser(updatedUser)
      return { error: null }
    }

    try {
      const { error } = await supabase.auth.updateUser({
        email: newEmail
      })
      
      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error: error.message }
    }
  }

  const value = {
    user,
    profile,
    loading,
    isDummyMode,
    signUp,
    signIn,
    signOut,
    updateProfile,
    updatePassword,
    updateEmail,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}


