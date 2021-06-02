import React from 'react';
import { postTimeFormat } from '@/utils';
import { Link } from 'react-router-dom';

import PostTags from '../PostTags';
import EmptyRecord from '@/components/Empty-Record';

const PostList = ({ posts }) => {
  if (!posts) {
    return null;
  }
  if (posts.length === 0) {
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
            <Link className="blog-item--link" to={blog.slug}>
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
