# ZeroWare - Premium Gaming Cheats

A modern web application for premium gaming cheats with authentication and dashboard functionality.

## Features

- **Landing Page**: Exact replica of the ZeroWare design with dark theme and green accents
- **Authentication**: Clerk-based sign-in/sign-up system
- **Protected Routes**: Dashboard only accessible after authentication
- **Dashboard**: Complete dashboard with navigation tabs (Store, My Keys, Downloads, Status, Support)
- **User Management**: Dropdown menu with settings and sign-out functionality
- **Responsive Design**: Works on desktop and mobile devices

## Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (version 18 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

## Installation

1. **Clone or download this project** to your local machine

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Clerk Authentication**:
   - Go to [clerk.com](https://clerk.com) and create a free account
   - Create a new application
   - Copy your publishable key and secret key
   - Create a `.env.local` file in the root directory with the following content:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
   CLERK_SECRET_KEY=your_secret_key_here
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── app/
│   ├── dashboard/          # Protected dashboard routes
│   │   ├── downloads/      # Downloads page
│   │   ├── my-keys/        # My Keys page
│   │   ├── settings/       # Settings page
│   │   ├── status/         # Status page
│   │   ├── store/          # Store page
│   │   ├── support/        # Support page
│   │   ├── layout.tsx      # Dashboard layout with auth protection
│   │   └── page.tsx        # Dashboard home page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout with Clerk provider
│   └── page.tsx            # Landing page
├── components/
│   ├── DashboardHeader.tsx # Dashboard header with user menu
│   ├── Header.tsx          # Landing page header
│   └── Hero.tsx            # Landing page hero section
└── middleware.ts           # Clerk authentication middleware
```

## Usage

1. **Landing Page**: Users see the landing page with sign-in/sign-up options
2. **Authentication**: Users must sign in to access dashboard features
3. **Dashboard**: After authentication, users can access all dashboard features
4. **Navigation**: Users can navigate between Store, My Keys, Downloads, Status, and Support
5. **User Menu**: Click on user avatar to access Settings and Sign Out

## Customization

- **Colors**: Modify the color scheme in `tailwind.config.ts`
- **Content**: Update text and images in the component files
- **Features**: Add new pages by creating new directories in `src/app/dashboard/`
- **Styling**: Customize styles using Tailwind CSS classes

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Clerk**: Authentication and user management
- **Lucide React**: Icon library

## Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform**:
   - Vercel (recommended for Next.js)
   - Netlify
   - AWS
   - Any other hosting platform that supports Node.js

3. **Set environment variables** in your deployment platform with your Clerk keys

## Support

If you encounter any issues:

1. Check that Node.js is properly installed
2. Verify your Clerk environment variables are correct
3. Ensure all dependencies are installed with `npm install`
4. Check the browser console for any error messages

## License

This project is for educational purposes only.
