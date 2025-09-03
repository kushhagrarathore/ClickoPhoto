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
      // Use dummy data for local testing
      const dummyUser = dummyProfiles[0] // Default to first profile
      setUser(dummyUser)
      setProfile(dummyUser)
      setLoading(false)
      return
    }

    // Get initial session
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session?.user) {
        setUser(session.user)
        await fetchProfile(session.user.id)
      }
      setLoading(false)
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          setUser(session.user)
          await fetchProfile(session.user.id)
        } else {
          setUser(null)
          setProfile(null)
        }
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [isDummyMode])

  // Fetch user profile (supports schemas using id or user_id)
  const fetchProfile = async (userId) => {
    try {
      // Try id column first
      let { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle()

      if (error && error.code !== 'PGRST116') throw error

      // If not found, try user_id column
      if (!data) {
        const second = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', userId)
          .maybeSingle()
        data = second.data
        if (second.error && second.error.code !== 'PGRST116') throw second.error
      }

      if (data) setProfile(data)
    } catch (error) {
      console.error('Error fetching profile:', error)
    }
  }

  // Sign up with role selection and create profile row
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
            role,
          },
        },
      })

      if (error) throw error

      // Create profile row (support both schemas: id or user_id primary key)
      if (data.user) {
        const basePayload = {
          email,
          full_name: fullName,
          role,
          avatar_url: null,
          bio: '',
          location: '',
          rating: null,
          review_count: 0,
        }

        // Try with id
        let profileError = null
        let insert = await supabase
          .from('profiles')
          .insert([{ id: data.user.id, ...basePayload }])

        if (insert.error) {
          profileError = insert.error
          // Fallback: try user_id
          const second = await supabase
            .from('profiles')
            .insert([{ user_id: data.user.id, ...basePayload }])
          if (second.error) profileError = second.error
        }

        if (profileError) throw profileError
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
    if (isDummyMode) {
      setUser(null)
      setProfile(null)
      return { error: null }
    }

    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error: error.message }
    }
  }

  // Update profile
  const updateProfile = async (updates) => {
    if (isDummyMode) {
      const updatedProfile = { ...profile, ...updates }
      setProfile(updatedProfile)
      setUser(updatedProfile)
      return { data: updatedProfile, error: null }
    }

    try {
      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.id)
        .select()
        .single()

      if (error) throw error
      setProfile(data)
      return { data, error: null }
    } catch (error) {
      return { data: null, error: error.message }
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
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}


