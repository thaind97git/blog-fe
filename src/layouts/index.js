import React, { useEffect, useState } from 'react';
import { THEME_TOGGLE } from '@/enums/theme';
import { getTheme } from '@/helpers/local-storage';

import Main from './Main';
import Sidebar from './Sidebar';
import { useDispatch } from 'react-redux';
import { setTheme } from '@/store/actions';

const Layout = () => {
  const dispatch = useDispatch();
  const [isDark, setIsDark] = useState(JSON.parse(getTheme()));
  useEffect(() => {
    dispatch(setTheme(isDark ? THEME_TOGGLE.dark : THEME_TOGGLE.light));
  }, [isDark, dispatch]);
  const layoutClass = [
    'layout',
    `theme-${isDark ? THEME_TOGGLE.dark : THEME_TOGGLE.light}`,
  ].join(' ');
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
