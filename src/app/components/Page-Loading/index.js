import { getLoading } from '@/store/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner';

const PageLoading = ({ show }) => {
  const loading = useSelector(getLoading);
  const showLoading = typeof show === 'boolean' ? show : loading;

  return (
    <div
      className="page-loading"
      style={{ display: showLoading ? '' : 'none' }}
    >
      <div className="loading-content">
        <Spinner />
      </div>
    </div>
  );
};

export default PageLoading;
