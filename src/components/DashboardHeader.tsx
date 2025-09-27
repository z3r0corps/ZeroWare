'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Settings, LogOut } from 'lucide-react'
import { useUser, UserButton, useClerk } from '@clerk/nextjs'

export default function DashboardHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { user } = useUser()
  const { signOut } = useClerk()

  const handleLogout = () => {
    setIsDropdownOpen(false)
    signOut({ redirectUrl: '/' })
  }

  return (
    <header className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/dashboard" className="text-2xl font-bold">
              <span className="text-white">Z</span>
              <span className="text-green-500">W</span>
            </Link>
          </div>

          {/* Navigation and User Menu */}
          <div className="flex items-center space-x-8">
            {/* Navigation - All tabs visible in dashboard */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                href="/dashboard" 
                className="text-white hover:text-gray-300 transition-colors"
              >
                Dashboard
              </Link>
              <Link 
                href="/dashboard/store" 
                className="text-white hover:text-gray-300 transition-colors"
              >
                Store
              </Link>
              <Link 
                href="/dashboard/my-keys" 
                className="text-white hover:text-gray-300 transition-colors"
              >
                My Keys
              </Link>
              <Link 
                href="/dashboard/downloads" 
                className="text-white hover:text-gray-300 transition-colors"
              >
                Downloads
              </Link>
              <Link 
                href="/dashboard/status" 
                className="text-white hover:text-gray-300 transition-colors"
              >
                Status
              </Link>
              <Link 
                href="/dashboard/support" 
                className="text-white hover:text-gray-300 transition-colors"
              >
                Support
              </Link>
            </nav>

            {/* User Menu - Next to Dashboard */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
              >
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-6 h-6"
                    }
                  }}
                />
                <span className="hidden md:block font-medium">{user?.firstName || 'User'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black rounded-md shadow-lg border border-gray-800 z-50">
                  <div className="py-1">
                    <Link
                      href="/dashboard/settings"
                      className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-900 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <Settings className="w-4 h-4 mr-3" />
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-gray-900 transition-colors"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </header>
  )
}
