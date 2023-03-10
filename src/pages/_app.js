// NextAuth
import { SessionProvider } from "next-auth/react";

// Toaster for react-hot-toast
import { Toaster } from 'react-hot-toast';

// Global styles
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
