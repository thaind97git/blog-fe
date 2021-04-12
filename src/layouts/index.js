import React from 'react';

import Main from './Main';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout--content">
        <Main />
      </div>
    </div>
  );
};

export default Layout;
