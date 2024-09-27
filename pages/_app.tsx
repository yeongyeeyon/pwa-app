// pages/_app.tsx
import type { AppProps } from 'next/app';
// import '../styles/globals.css'; // Create if needed for global styling

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
