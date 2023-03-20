/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'my-value',
    NEXT_PUBLIC_FIREBASE_API_KEY:'AIzaSyD_em4eiD0Rm8d-L1lGIhaR39pHHooZDM8',
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:'admin-template-457ea.firebaseapp.com',
    NEXT_PUBLIC_FIREBASE_PROJECT_ID:'admin-template-457ea'
  },
}

module.exports = nextConfig
