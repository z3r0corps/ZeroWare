'use client'

import { SignInButton, SignUpButton } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export default function Hero() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Welcome Text */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to{' '}
            <span className="text-white">Zero</span><span className="text-green-500">Ware</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white mb-12">
            Premium gaming cheats for the most popular games
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-16 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">
                10+
              </div>
              <div className="text-white">Supported Games</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">
                99.9%
              </div>
              <div className="text-white">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">
                24/7
              </div>
              <div className="text-white">Support</div>
            </div>
          </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <SignUpButton mode="modal" appearance={{ baseTheme: dark }}>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors w-full sm:w-auto">
                    Get Started
                  </button>
                </SignUpButton>
                <SignInButton mode="modal" appearance={{ baseTheme: dark }}>
                  <button className="bg-transparent border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors w-full sm:w-auto">
                    Sign In
                  </button>
                </SignInButton>
              </div>
        </div>
      </div>
    </div>
  )
}
