# 🔧 Clerk Dashboard Configuration Guide

## Step 1: Configure Authentication Methods

1. **Go to your Clerk Dashboard** at https://dashboard.clerk.com
2. **Click "Configure" in the left sidebar**
3. **Go to "User & Authentication" tab**

### Authentication Settings:
- ✅ **Enable "Email address"** as a sign-in method
- ❌ **Disable "Email address + Password"** 
- ✅ **Enable "Email address + Verification code"**
- ❌ **Disable all other sign-in methods** (Google, etc.)

## Step 2: Configure User Profile Fields

1. **Go to "User & Authentication" → "Profile"**
2. **Set the following:**
   - ❌ **Disable "First name"** (set to "Not required")
   - ❌ **Disable "Last name"** (set to "Not required")
   - ✅ **Enable "Username"** (set to "Required")
   - ✅ **Enable "Email address"** (set to "Required")

## Step 3: Configure Metadata

1. **Go to "User & Authentication" → "Metadata"**
2. **Add "username" as public metadata**
3. **This will be used for display names in chat/forum**

## Step 4: Customize Appearance

1. **Go to "Customization" tab**
2. **Set Brand color** to: `#22c55e` (your green)
3. **Upload your logo** (ZW logo)
4. **Set background** to dark theme
5. **Disable "Show Clerk branding"** for cleaner look

## Step 5: Configure Paths

1. **Go to "Paths" tab**
2. **Set the following:**
   - **After sign-in URL:** `/dashboard`
   - **After sign-up URL:** `/dashboard`
   - **Sign-in URL:** `/sign-in`
   - **Sign-up URL:** `/sign-up`

## Step 6: Remove Development Mode

### Option A: Stay in Development (for now)
- Keep development keys
- "Development mode" text will remain (this is normal)

### Option B: Switch to Production
1. **Go to "API Keys" tab**
2. **Switch to "Production" mode**
3. **Copy new production keys**
4. **Update your `.env.local` file**
5. **Restart your development server**

## Step 7: Test the Configuration

After configuring:
1. **Refresh your browser**
2. **Go to sign-up page**
3. **You should see:**
   - ✅ Only email field (no password)
   - ✅ Only username field (no first/last name)
   - ✅ Email verification code flow
   - ✅ Dark theme styling

## Troubleshooting

If fields still appear:
1. **Clear browser cache**
2. **Restart development server**
3. **Check Clerk dashboard settings**
4. **Verify environment variables**

## Next Steps

Once configured properly:
- Users will only need email + username
- Email verification codes will be sent
- No password required
- Clean, minimal signup flow
