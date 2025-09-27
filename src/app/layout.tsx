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
            elements: {
              modalContent: "bg-black border-gray-800",
              modalHeaderTitle: "text-white",
              modalHeaderSubtitle: "text-gray-300",
              modalCloseButton: "text-white hover:text-gray-300",
              formButtonPrimary: "bg-green-500 hover:bg-green-600 text-white",
              formFieldInput: "bg-black border-gray-700 text-white",
              formFieldLabel: "text-white",
              formFieldInputShowPasswordButton: "text-white hover:text-gray-300",
              footerActionLink: "text-green-500 hover:text-green-400",
              identityPreviewText: "text-white",
              formFieldSuccessText: "text-green-500",
              formFieldErrorText: "text-red-500",
              card: "bg-black border-gray-800",
              headerTitle: "text-white",
              headerSubtitle: "text-gray-300",
              dividerLine: "bg-gray-700",
              dividerText: "text-gray-300",
              formResendCodeLink: "text-green-500 hover:text-green-400",
              otpCodeFieldInput: "bg-black border-gray-700 text-white",
              formFieldHintText: "text-gray-400",
              footerActionText: "text-gray-300",
              footerText: "text-gray-400",
              identityPreviewEditButton: "text-green-500 hover:text-green-400",
              formFieldAction: "text-green-500 hover:text-green-400",
              alternativeMethodsBlockButton: "text-green-500 hover:text-green-400",
              userPreviewMainIdentifier: "text-white",
              userPreviewSecondaryIdentifier: "text-gray-300",
              userButtonPopoverCard: "bg-black border-gray-800",
              userButtonPopoverActionButton: "text-white hover:bg-gray-800",
              userButtonPopoverActionButtonText: "text-white",
              userButtonPopoverFooter: "hidden",
              userButtonPopoverHeaderTitle: "text-white",
              userButtonPopoverHeaderSubtitle: "text-gray-300",
              userButtonPopoverMainIdentifier: "text-white",
              userButtonPopoverSecondaryIdentifier: "text-gray-300",
              userButtonPopoverFooterAction: "text-green-500 hover:text-green-400",
              userButtonPopoverFooterActionText: "text-green-500 hover:text-green-400"
            }
          }}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}
