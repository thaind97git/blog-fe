import React from 'react';
import { Link } from 'react-router-dom';

import EmptyRecord from '@/components/Empty-Record';
import PostTags from '../PostTags';
import { postTimeFormat } from '@/utils';

const PostList = ({ posts, fetching = false }) => {
  if (fetching) {
    return null;
  }
  if (!posts || posts.length === 0) {
    return (
      <EmptyRecord title="No Records Found" description="Please try again" />
    );
  }
  return (
    <div className="blog-list">
      {posts?.map(blog => {
        return (
          <div className="blog-item" key={blog.id}>
            <span className="blog-item--date">
              {postTimeFormat(blog.publishedAt)}
            </span>{' '}
            <PostTags tags={blog.tags} />
            <Link className="blog-item--link" to={`/blogs/${blog.slug}`}>
              <h3 className="blog-item--title">{blog.title} </h3>
            </Link>
            <p>{blog.metaTitle}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
