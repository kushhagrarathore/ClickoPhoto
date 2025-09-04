"use client"

import * as React from "react"
import { useLocation, Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Camera, Menu, X, User, LogOut, Search, Bell } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Photographers", to: "/search?service=photography" },
  { name: "Studios", to: "/search?service=studio" },
  { name: "Drones", to: "/search?service=drone" },
  { name: "Events", to: "/search?service=events" },
]

export function Navbar() {
  const location = useLocation()
  const pathname = location.pathname
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  // Mock user data - replace with actual auth
  const user = {
    name: "John Doe",
    email: "john@example.com",
    image: null,
    role: "CUSTOMER" as const,
  }

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "glass backdrop-blur-md border-b border-white/20 shadow-xl" 
          : "bg-white/80 backdrop-blur-sm border-b border-gray-200/50"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <motion.div 
          className="flex lg:flex-1"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">PhotoHub</span>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Camera className="h-8 w-8 text-blue-600" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-600/20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PhotoHub
              </span>
            </div>
          </Link>
        </motion.div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "relative")}
            aria-label="Open main menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                to={item.to}
                className={cn(
                  "relative text-sm font-medium leading-6 text-gray-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-lg",
                  pathname === item.to && "text-blue-600 bg-blue-50"
                )}
              >
                {item.name}
                {pathname === item.to && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    layoutId="navbar-indicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Desktop Actions */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search services..."
              className="pl-10 w-64 h-9 bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 transition-all duration-200"
            />
          </div>

          {/* Notifications */}
          <button className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "relative")}
            aria-label="Notifications">
            <Bell className="h-5 w-5" />
            <motion.div
              className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={cn(buttonVariants({ variant: "ghost" }), "relative h-9 w-9 rounded-full hover:bg-gray-100")}
                  aria-label="Open profile menu">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={user.image || ""} alt={user.name} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 mt-2" align="end" forceMount>
                <div className="flex items-center gap-3 p-3 border-b border-gray-100">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.image || ""} alt={user.name} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/profile" className="flex items-center gap-2 p-2">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/bookings" className="flex items-center gap-2 p-2">
                    <Camera className="h-4 w-4" />
                    <span>My Bookings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex gap-x-3">
              <Link to="/auth" className={buttonVariants({ variant: "ghost" })}>Sign in</Link>
              <Link to="/auth" className={buttonVariants({ variant: "gradient" })}>Sign up</Link>
            </div>
          )}
        </div>
      </nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-md px-6 py-6 sm:max-w-sm"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between">
                <Link to="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">PhotoHub</span>
                  <div className="flex items-center space-x-2">
                    <Camera className="h-8 w-8 text-blue-600" />
                    <span className="text-xl font-bold text-gray-900">PhotoHub</span>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className={buttonVariants({ variant: "ghost", size: "icon" })}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
              {/* Mobile Search */}
              <div className="mt-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search services..."
                    className="pl-10 w-full"
                  />
                </div>
              </div>

              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={cn(
                          "-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50 transition-colors",
                          pathname === item.to && "bg-blue-50 text-blue-600"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    {user ? (
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 px-3 py-2">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={user.image || ""} alt={user.name} />
                            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                              {user.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{user.name}</p>
                            <p className="text-xs text-gray-500">{user.email}</p>
                          </div>
                        </div>
                        <Link to="/profile" className={cn(buttonVariants({ variant: "ghost" }), "w-full justify-start inline-flex")}> 
                          <User className="mr-2 h-4 w-4" />
                          Profile
                        </Link>
                        <button className={cn(buttonVariants({ variant: "ghost" }), "w-full justify-start text-red-600 inline-flex")}> 
                          <LogOut className="mr-2 h-4 w-4" />
                          Log out
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <Link to="/auth" className={cn(buttonVariants({ variant: "ghost" }), "w-full inline-flex justify-center")}>Sign in</Link>
                        <Link to="/auth" className={cn(buttonVariants({ variant: "gradient" }), "w-full inline-flex justify-center")}>Sign up</Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}