import '../styles/globals.scss';
import Layout from '../components/Layout/Layout';
import { UIContextProvider } from '../store/ui-context';
import { CartContextProvider } from '../store/cart-context';


function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <UIContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UIContextProvider>
    </CartContextProvider>
    )
}


export default MyApp
