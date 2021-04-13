import { getTheme } from '@/helpers/local-storage';
import React, { useState } from 'react';

import Main from './Main';
import Sidebar from './Sidebar';

const Layout = () => {
  const [isDark, setIsDark] = useState(JSON.parse(getTheme()));
  const layoutClass = ['layout', `theme-${isDark ? 'dark' : 'light'}`].join(
    ' ',
  );
  return (
    <div className={layoutClass}>
      <Sidebar
        onThemeChange={event => setIsDark(event.target.checked)}
        themeValue={isDark}
      />
      <div className="layout--content">
        <Main />
      </div>
    </div>
  );
};

export default Layout;
