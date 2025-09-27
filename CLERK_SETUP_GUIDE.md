# 🔧 Clerk Setup Guide for ZeroWare

## Step 1: Configure Clerk Dashboard

1. **Go to your Clerk Dashboard** at https://dashboard.clerk.com
2. **Click on "Configure" in the left sidebar**
3. **Go to "User & Authentication" tab**

### Authentication Settings:
- **Enable "Email address"** as a sign-in method
- **Disable "Email address + Password"** 
- **Enable "Email address + Verification code"**
- **Disable all other sign-in methods** (Google, etc.)

### User Profile Settings:
- **Enable "Username"** as a required field
- **Set Username as "Public metadata"** (this will be the display name)
- **Enable "Email address"**
- **Disable "First name" and "Last name"** (we'll use username instead)

## Step 2: Customize Appearance

1. **Go to "Customization" tab**
2. **Set Brand color** to match your green theme: `#22c55e`
3. **Upload your logo** (ZW logo)
4. **Set background** to dark theme
5. **Disable "Show Clerk branding"** for cleaner look

## Step 3: Configure Redirects

1. **Go to "Paths" tab**
2. **Set After sign-in URL:** `/dashboard`
3. **Set After sign-up URL:** `/dashboard`
4. **Set Sign-in URL:** `/sign-in`
5. **Set Sign-up URL:** `/sign-up`

## Step 4: Configure Metadata

1. **Go to "User & Authentication" → "Metadata"**
2. **Add "username" as public metadata**
3. **This will be used for display names in chat/forum**

## Step 5: Development Settings

1. **Make sure you're in "Development" mode**
2. **Copy your API keys** to `.env.local`
3. **Test the flow** before going to production

## Next Steps:
After configuring Clerk, we'll:
1. Create custom sign-in/sign-up pages
2. Set up user profile management
3. Add settings page
4. Configure username as display name
5. Style everything to match your dark theme
