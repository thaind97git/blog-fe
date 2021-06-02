import React, { useState } from 'react';

import useDidMountEffect from '@/hooks/useDidMountEffect';
import PostList from './components/PostList';
import Pagination from '@/components/Pagination';

import { getPostPaging } from '@/apis/post';
import useGet from '@/hooks/useGet';

const BlogPost = () => {
  const [refreshPost, setRefreshPost] = useState(false);

  const [pageIndex, setPageIndex] = useState(1);

  const { data: posts = {}, fetching: fetchingPosts } = useGet({
    func: () => getPostPaging({ pageIndex, pageSize: 10 }),
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
