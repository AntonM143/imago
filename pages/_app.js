import '../styles/globals.scss';
import Layout from '../components/Layout/Layout';
import { UIContextProvider } from '../store/ui-context';
import { CartContextProvider } from '../store/cart-context';
import NextNProgress from 'nextjs-progressbar';
import '../styles/transitions.css'

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <UIContextProvider>
        <NextNProgress 
          color="#1E1E20"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UIContextProvider>
    </CartContextProvider>
    )
}


export default MyApp
