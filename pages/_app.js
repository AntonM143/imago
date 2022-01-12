import '../styles/globals.scss';
import Layout from '../components/Layout/Layout';
import { UIContextProvider } from '../store/ui-context';

function MyApp({ Component, pageProps }) {
  return (
    <UIContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIContextProvider>
    )
}


export default MyApp
