import { Fragment } from 'react';
import Iphone14PRO from '../components/Iphone14/Iphone14-pro';
import Iphone14 from '../components/Iphone14/Iphone14';
import Series8 from '../components/Watch/series8';
import NewProducts from '../components/NewProducts/NewProducts';
const Home = () => {
  return (
    <Fragment>
      <Iphone14PRO />
      <Iphone14 />
      <Series8 />
      <NewProducts />
    </Fragment>
  );
};

export default Home;
