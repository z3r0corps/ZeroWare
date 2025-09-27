'use client'

import Link from 'next/link'
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export default function Header() {
  return (
    <>
    <header className="bg-black border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-white">Z</span>
              <span className="text-green-500">W</span>
            </Link>
          </div>

          {/* Navigation - Hidden for non-signed in users */}
          <nav className="hidden md:flex space-x-8">
            <SignedIn>
              <Link 
                href="/dashboard" 
                className="text-green-500 hover:text-green-400 transition-colors"
              >
                Dashboard
              </Link>
            </SignedIn>
          </nav>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-4">
                <SignedOut>
                  <SignInButton mode="modal" appearance={{ baseTheme: dark }}>
                    <button className="text-white hover:text-gray-300 transition-colors">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal" appearance={{ baseTheme: dark }}>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors">
                      Sign Up
                    </button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      baseTheme: dark,
                      elements: {
                        avatarBox: "w-8 h-8",
                        userButtonPopoverCard: "bg-gray-900 border border-gray-700",
                        userButtonPopoverActionButton: "text-white hover:bg-gray-800",
                        userButtonPopoverActionButtonText: "text-white",
                        userButtonPopoverFooter: "hidden"
                      }
                    }}
                  />
                </SignedIn>
              </div>
        </div>
      </div>
    </header>
    </>
  )
}
