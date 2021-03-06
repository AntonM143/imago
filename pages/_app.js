import '../styles/globals.scss';
import Layout from '../components/Layout/Layout';
import { UIContextProvider } from '../store/ui-context';
import { CartContextProvider } from '../store/cart-context';
import NextNProgress from 'nextjs-progressbar';
import '../styles/transitions.css'
import Script from 'next/script';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AppLoader from '@/components/AppLoader/AppLoader';

const rootStyles = {
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      const handleStart = () => {
        setLoading(true)
      }
      const handleStop = () => {
        setLoading(false)
      }
      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleStop);

      return () => {
        router.events.off("routeChangeStart", handleStart)
        router.events.off("routeChangeComplete", handleStop)
      }
    }, []);

  return (
    <div style={rootStyles}>
    <Script
      id="Cookiebot"
      src="https://consent.cookiebot.com/uc.js"
      data-cbid="a270ebf9-69ac-474d-ad48-b234ca05e06b"
      data-blockingmode="auto"
      type="text/javascript"
      strategy="beforeInteractive"
    />
    <CartContextProvider>
      <UIContextProvider>
        <NextNProgress
          color="#1E1E20"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Layout >
          { loading ? <AppLoader /> : <Component {...pageProps} />}
        </Layout>
      </UIContextProvider>
    </CartContextProvider>
    </div>
    )
}


export default MyApp
