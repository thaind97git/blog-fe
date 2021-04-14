import React, { useState } from 'react';

import useDidMountEffect from '@/hooks/useDidMountEffect';
import useGetRequest from '@/hooks/useGetRequest';
import PostList from './components/PostList';
import Pagination from '@/components/Pagination';

import { getPostPaging } from '@/apis/post';

const BlogPost = () => {
  const [refreshPost, setRefreshPost] = useState(false);

  const [pageIndex, setPageIndex] = useState(1);

  const { data: posts = {}, fetching: fetchingPosts } = useGetRequest({
    promiseFunction: getPostPaging,
    config: { pageIndex, pageSize: 10 },
    refresh: refreshPost,
  });

  useDidMountEffect(() => {
    setRefreshPost(prev => !prev);
  }, [pageIndex]);

  const { results, totalResults } = posts;
  return (
    <>
      <PostList posts={results} fetching={fetchingPosts} />
      <Pagination
        pageIndex={pageIndex}
        totalCount={totalResults}
        onChange={pageIndex => {
          setPageIndex(pageIndex);
        }}
      />
    </>
  );
};

export default BlogPost;
