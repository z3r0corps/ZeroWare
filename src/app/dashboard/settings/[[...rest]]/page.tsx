'use client'

import { useUser } from '@clerk/nextjs'
import { UserProfile } from '@clerk/nextjs'

export default function Settings() {
  const { user } = useUser()

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      {/* Compact Settings Modal */}
      <div className="bg-gray-900 border border-green-500/40 rounded-xl w-full max-w-4xl h-[85vh] flex flex-col shadow-2xl">
        {/* Header - Fixed */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-green-500/30 bg-gray-900 flex-shrink-0">
          <h1 className="text-xl font-bold text-white">
            <span className="text-green-500">Settings</span>
          </h1>
          <button 
            onClick={() => window.history.back()}
            className="text-white hover:text-green-500 text-xl font-light transition-colors"
          >
            ×
          </button>
        </div>

        {/* Scrollable Content - Flexible */}
        <div className="flex-1 overflow-hidden bg-gray-900">
          <UserProfile 
            routing="virtual"
            appearance={{
              elements: {
                rootBox: "w-full h-full flex flex-col",
                card: "bg-black border-none shadow-none w-full h-full flex flex-col overflow-hidden",
                navbar: "bg-black border-green-500/20 w-full px-4 py-3 flex-shrink-0",
                navbarButton: "text-white hover:bg-green-500/10 px-4 py-3 text-sm font-medium transition-all duration-200 rounded-md border border-transparent hover:border-green-500/30 hover:text-green-400",
                navbarButtonActive: "bg-green-500 text-black shadow-lg border-green-500 font-semibold",
                headerTitle: "text-white text-xl font-bold",
                headerSubtitle: "text-gray-400 text-sm",
                profileSectionTitle: "text-white text-base font-semibold",
                profilePage: "w-full bg-black px-4 py-4 flex-1 overflow-y-auto",
                pageScrollBox: "flex-1 overflow-y-auto",
                formFieldLabel: "text-white font-medium text-sm",
                formFieldInput: "bg-gray-900 border-gray-700 text-white rounded-lg px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all text-sm",
                formButtonPrimary: "bg-green-500 hover:bg-green-600 text-black rounded-lg px-6 py-3 font-semibold transition-all duration-200 shadow-lg hover:shadow-green-500/25 text-sm",
                formFieldSuccessText: "text-green-500 text-sm",
                formFieldErrorText: "text-red-400 text-sm",
                formFieldWarningText: "text-yellow-400 text-sm",
                alertText: "text-gray-400 text-sm",
                formResendCodeLink: "text-green-500 hover:text-green-400 text-sm font-medium transition-colors",
                otpCodeFieldInput: "bg-gray-900 border-gray-700 text-white rounded-lg px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all text-sm",
                identityPreviewText: "text-gray-400 text-sm",
                formHeaderTitle: "text-white text-lg font-semibold",
                formHeaderSubtitle: "text-gray-400 text-sm",
                footerActionLink: "text-green-500 hover:text-green-400 font-medium transition-colors text-sm",
                profileSection: "bg-gray-900 border-green-500/20 rounded-lg p-4 mb-3",
                profileSectionContent: "bg-gray-900",
                formFieldAction: "text-green-500 hover:text-green-400 font-medium transition-colors text-sm",
                formFieldHintText: "text-gray-400 text-sm",
                userPreviewMainIdentifier: "text-white font-medium text-sm",
                userPreviewSecondaryIdentifier: "text-gray-400 text-sm",
                userButtonPopoverCard: "bg-gray-900 border-green-500/30 shadow-xl",
                userButtonPopoverActionButton: "text-white hover:bg-green-500/10 transition-colors",
                userButtonPopoverActionButtonText: "text-white",
                userButtonPopoverFooter: "hidden",
                userButtonPopoverHeaderTitle: "text-white font-semibold",
                userButtonPopoverHeaderSubtitle: "text-gray-400",
                userButtonPopoverMainIdentifier: "text-white",
                userButtonPopoverSecondaryIdentifier: "text-gray-400",
                userButtonPopoverFooterAction: "text-green-500 hover:text-green-400 transition-colors",
                userButtonPopoverFooterActionText: "text-green-500 hover:text-green-400 transition-colors",
                formFieldInputShowPasswordButton: "text-gray-400 hover:text-green-500 transition-colors"
              },
              variables: {
                colorPrimary: "#22c55e",
                colorBackground: "#000000",
                colorInputBackground: "#1f2937",
                colorInputText: "#ffffff",
                colorText: "#ffffff",
                colorTextSecondary: "#9ca3af",
                borderRadius: "0.5rem"
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}
