import { getIsAuthenticated } from '@/store/selectors/auth';
import { getDisplayLayout } from '@/store/selectors/layout';
import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { footer } = useSelector(getDisplayLayout);
  const isAuthenticated = useSelector(getIsAuthenticated);
  if (!isAuthenticated || !footer) {
    return null;
  }
  return (
    <div id="footer">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <h1>Footer</h1>
    </div>
  );
};

export default Footer;
