import '../styles/globals.css';
import { Fragment } from 'react';
import MainNav from '../components/Navigation/MainNav';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <MainNav />
      <main>
        <Component {...pageProps} />
      </main>
    </Fragment>
  );
}

export default MyApp;
