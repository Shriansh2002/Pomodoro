// Toaster for react-hot-toast
import { Toaster } from 'react-hot-toast';

// Global styles
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}
