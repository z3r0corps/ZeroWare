import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZeroWare - Premium Gaming Cheats',
  description: 'Premium gaming cheats for the most popular games',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider
          afterSignInUrl="/dashboard"
          afterSignUpUrl="/dashboard"
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
          appearance={{
            baseTheme: dark,
            variables: {
              colorPrimary: "#22c55e",
              colorBackground: "#000000",
              colorInputBackground: "#1f2937",
              colorInputText: "#ffffff",
              colorText: "#ffffff",
              colorTextSecondary: "#9ca3af",
              borderRadius: "0.5rem"
            },
            elements: {
              modalContent: "bg-gray-900 border border-green-500/30",
              modalHeaderTitle: "text-white text-xl font-bold",
              modalHeaderSubtitle: "text-gray-400",
              modalCloseButton: "text-white hover:text-green-500 transition-colors",
              formButtonPrimary: "bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg px-6 py-3 shadow-lg hover:shadow-green-500/25 transition-all duration-200",
              formFieldInput: "bg-gray-900 border-gray-700 text-white rounded-lg px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all",
              formFieldLabel: "text-white font-medium",
              formFieldInputShowPasswordButton: "text-gray-400 hover:text-green-500 transition-colors",
              footerActionLink: "text-green-500 hover:text-green-400 font-medium transition-colors",
              identityPreviewText: "text-white",
              formFieldSuccessText: "text-green-500",
              formFieldErrorText: "text-red-400",
              card: "bg-gray-900 border border-green-500/20",
              headerTitle: "text-white font-bold",
              headerSubtitle: "text-gray-400",
              dividerLine: "bg-gray-700",
              dividerText: "text-gray-400",
              formResendCodeLink: "text-green-500 hover:text-green-400 font-medium transition-colors",
              otpCodeFieldInput: "bg-gray-900 border-gray-700 text-white rounded-lg px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all",
              formFieldHintText: "text-gray-400",
              footerActionText: "text-gray-400",
              footerText: "text-gray-400",
              identityPreviewEditButton: "text-green-500 hover:text-green-400 transition-colors",
              formFieldAction: "text-green-500 hover:text-green-400 font-medium transition-colors",
              alternativeMethodsBlockButton: "text-green-500 hover:text-green-400 transition-colors",
              userPreviewMainIdentifier: "text-white font-medium",
              userPreviewSecondaryIdentifier: "text-gray-400",
              userButtonPopoverCard: "bg-gray-900 border border-green-500/30 shadow-xl",
              userButtonPopoverActionButton: "text-white hover:bg-green-500/10 transition-colors",
              userButtonPopoverActionButtonText: "text-white",
              userButtonPopoverFooter: "hidden",
              userButtonPopoverHeaderTitle: "text-white font-semibold",
              userButtonPopoverHeaderSubtitle: "text-gray-400",
              userButtonPopoverMainIdentifier: "text-white",
              userButtonPopoverSecondaryIdentifier: "text-gray-400",
              userButtonPopoverFooterAction: "text-green-500 hover:text-green-400 transition-colors",
              userButtonPopoverFooterActionText: "text-green-500 hover:text-green-400 transition-colors"
            }
          }}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}
