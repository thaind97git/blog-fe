import React, { useState } from 'react';
import useGetRequest from '@/hooks/useGetRequest';

import { getPostPaging } from '@/apis/post';
import Pagination from '@/components/Pagination';
import useDidMountEffect from '@/hooks/useDidMountEffect';
import PostList from './components/PostList';

const Home = () => {
  const [refreshPost, setRefreshPost] = useState(false);

  const [pageIndex, setPageIndex] = useState(1);

  const { data: postList = {} } = useGetRequest({
    promiseFunction: getPostPaging,
    config: { pageIndex, pageSize: 10 },
    refresh: refreshPost,
  });

  useDidMountEffect(() => {
    setRefreshPost(prev => !prev);
  }, [pageIndex]);

  const { results, totalResults } = postList;

  return (
    <div className="home">
      <PostList posts={results} />
      <Pagination
        pageIndex={pageIndex}
        totalCount={totalResults}
        onChange={pageIndex => {
          setPageIndex(pageIndex);
        }}
      />
    </div>
  );
};

export default Home;
