import '../styles/globals.scss';
import Layout from '../components/Layout/Layout';
import { UIContextProvider } from '../store/ui-context';
import { CartContextProvider } from '../store/cart-context';
import NextNProgress from 'nextjs-progressbar';
import '../styles/transitions.css'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {

  return (
    <>
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
          <Component {...pageProps} />
        </Layout>
      </UIContextProvider>
    </CartContextProvider>
    </>
    )
}


export default MyApp
