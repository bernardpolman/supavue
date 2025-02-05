# SupaVue 🚀

**SupaVue** is a lightweight, ready-to-go boilerplate for quickly building and prototyping web applications using **Vue 3**, **Vite**, and **Supabase**. Designed for speed and simplicity, SupaVue helps developers spin up MVPs effortlessly, providing basic web app features that can be modified, removed or extended.

## 🚧 Features

- **🔐 Supabase Authentication with Social Login**  
  Integrated Supabase auth with support for Google sign-in (can be extended with other social providers).

- **🛡️ Auth Guards**  
  Pre-packaged with example routes and route guarding that prevents unathorized access to protected or non-existing routes.

- **🍍 State Management with Pinia**  
  Lightweight and efficient state management using Pinia, demonstrated with user store.

- **📊 Pre-built Dashboard & Landing Page**  
  Comes with pre-defined views for landing page and dashboard that can be swapped out or modified furhter.

- **👤 Quick Google Auth included!**  
  Boilerplate includes authentication components for quick-start with Google login provider.

- **⚡ Powered by Vite**  
  Ultra-fast development and hot module replacement with Vite.

## 🚀 Quick Start

1. **Clone the Repository**
   ```
   git clone https://github.com/yourusername/supavue.git
   cd supavue
   ```
2. **Install dependencies**
   ```
   npm install
   ```
3. **Set Up Supabase**

   - Create a project on [Supabase](https://supabase.io).
   - Copy your Supabase `URL` and `Anon Key` to a `.env` file in the root directory:

   ```env
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. Run then project locally
   ```env
   npm run dev
   ```

**Thanks for using SupaVue!**
