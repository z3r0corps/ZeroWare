'use client'

import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

export default function DashboardHeader() {
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
          <div className="flex items-center">
            {/* Navigation - All tabs visible in dashboard */}
            <nav className="hidden md:flex items-center space-x-12 mr-12">
              <Link 
                href="/dashboard" 
                className="text-white hover:text-green-400 transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
              >
                Dashboard
              </Link>
              <Link 
                href="/dashboard/store" 
                className="text-white hover:text-green-400 transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
              >
                Store
              </Link>
              <Link 
                href="/dashboard/my-keys" 
                className="text-white hover:text-green-400 transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
              >
                My Keys
              </Link>
              <Link 
                href="/dashboard/downloads" 
                className="text-white hover:text-green-400 transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
              >
                Downloads
              </Link>
              <Link 
                href="/dashboard/status" 
                className="text-white hover:text-green-400 transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
              >
                Status
              </Link>
              <Link 
                href="/dashboard/support" 
                className="text-white hover:text-green-400 transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
              >
                Support
              </Link>
            </nav>

            {/* User Menu - Using Clerk's UserButton with custom styling */}
            <div className="relative">
              <UserButton 
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-8 h-8",
                    userButtonPopoverCard: "bg-black border border-green-500/30 shadow-xl",
                    userButtonPopoverActionButton: "text-white hover:bg-green-500/10 transition-colors",
                    userButtonPopoverActionButtonText: "text-white",
                    userButtonPopoverFooter: "hidden",
                    userButtonPopoverHeaderTitle: "text-white font-semibold",
                    userButtonPopoverHeaderSubtitle: "text-gray-400",
                    userButtonPopoverMainIdentifier: "text-white",
                    userButtonPopoverSecondaryIdentifier: "text-gray-400",
                    userButtonPopoverFooterAction: "text-green-500 hover:text-green-400 transition-colors",
                    userButtonPopoverFooterActionText: "text-green-500 hover:text-green-400 transition-colors"
                  },
                  variables: {
                    colorPrimary: "#22c55e",
                    colorBackground: "#000000",
                    colorText: "#ffffff",
                    colorTextSecondary: "#9ca3af"
                  }
                }}
                afterSignOutUrl="/"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}