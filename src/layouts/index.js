import React, { Fragment } from 'react';

import Header from './header';

import Footer from './footer';
import Main from './main';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
};

export default Layout;
