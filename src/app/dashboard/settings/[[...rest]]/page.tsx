'use client'

import { useUser } from '@clerk/nextjs'
import { UserProfile } from '@clerk/nextjs'

export default function Settings() {
  const { user } = useUser()

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      {/* Ultra Narrow Overlay Modal */}
      <div className="bg-black border border-green-500/30 rounded-xl w-full max-w-2xl h-[85vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-green-500/20 bg-black">
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

        {/* Scrollable Content */}
        <div className="h-full overflow-y-auto bg-black">
          <UserProfile 
            routing="hash"
            appearance={{
              elements: {
                rootBox: "w-full h-full",
                card: "bg-black border-none shadow-none w-full h-full",
                navbar: "bg-black border-green-500/20 w-full px-3 py-2",
                navbarButton: "text-white hover:bg-green-500/10 px-3 py-2 text-xs font-medium transition-all duration-200 rounded-md border border-transparent hover:border-green-500/30",
                navbarButtonActive: "bg-green-500 text-black shadow-lg border-green-500",
                headerTitle: "text-white text-lg font-bold",
                headerSubtitle: "text-gray-400 text-xs",
                profileSectionTitle: "text-white text-sm font-semibold",
                profilePage: "w-full bg-black px-3 py-3",
                formFieldLabel: "text-white font-medium text-xs",
                formFieldInput: "bg-black border-green-500/30 text-white rounded-md px-3 py-2 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-xs",
                formButtonPrimary: "bg-green-500 hover:bg-green-600 text-black rounded-md px-3 py-2 font-medium transition-all duration-200 shadow-lg hover:shadow-green-500/25 text-xs",
                formFieldSuccessText: "text-green-500 text-xs",
                formFieldErrorText: "text-red-400 text-xs",
                formFieldWarningText: "text-yellow-400 text-xs",
                alertText: "text-gray-400 text-xs",
                formResendCodeLink: "text-green-500 hover:text-green-400 text-xs font-medium transition-colors",
                otpCodeFieldInput: "bg-black border-green-500/30 text-white rounded-md px-3 py-2 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-xs",
                identityPreviewText: "text-gray-400 text-xs",
                formHeaderTitle: "text-white text-base font-semibold",
                formHeaderSubtitle: "text-gray-400 text-xs",
                footerActionLink: "text-green-500 hover:text-green-400 font-medium transition-colors text-xs",
                profileSection: "bg-black border-green-500/20 rounded-md p-3 mb-2",
                profileSectionContent: "bg-black",
                formFieldAction: "text-green-500 hover:text-green-400 font-medium transition-colors text-xs",
                formFieldHintText: "text-gray-400 text-xs",
                userPreviewMainIdentifier: "text-white font-medium text-xs",
                userPreviewSecondaryIdentifier: "text-gray-400 text-xs",
                userButtonPopoverCard: "bg-black border-green-500/30 shadow-xl",
                userButtonPopoverActionButton: "text-white hover:bg-green-500/10 transition-colors",
                userButtonPopoverActionButtonText: "text-white",
                userButtonPopoverFooter: "hidden",
                userButtonPopoverHeaderTitle: "text-white font-semibold",
                userButtonPopoverHeaderSubtitle: "text-gray-400",
                userButtonPopoverMainIdentifier: "text-white",
                userButtonPopoverSecondaryIdentifier: "text-gray-400",
                userButtonPopoverFooterAction: "text-green-500 hover:text-green-400 transition-colors",
                userButtonPopoverFooterActionText: "text-green-500 hover:text-green-400 transition-colors",
                formFieldInputShowPasswordButton: "text-gray-400 hover:text-green-500 transition-colors",
                formFieldSuccessText: "text-green-500 text-xs",
                formFieldErrorText: "text-red-400 text-xs",
                formFieldWarningText: "text-yellow-400 text-xs",
                alertText: "text-gray-400 text-xs",
                formResendCodeLink: "text-green-500 hover:text-green-400 text-xs font-medium transition-colors",
                otpCodeFieldInput: "bg-black border-green-500/30 text-white rounded-md px-3 py-2 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-xs",
                identityPreviewText: "text-gray-400 text-xs",
                formHeaderTitle: "text-white text-base font-semibold",
                formHeaderSubtitle: "text-gray-400 text-xs",
                footerActionLink: "text-green-500 hover:text-green-400 font-medium transition-colors text-xs"
              },
              variables: {
                colorPrimary: "#22c55e",
                colorBackground: "#000000",
                colorInputBackground: "#000000",
                colorInputText: "#ffffff",
                colorText: "#ffffff",
                colorTextSecondary: "#9ca3af",
                borderRadius: "0.375rem"
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}
