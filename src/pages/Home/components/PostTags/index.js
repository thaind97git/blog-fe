import React from 'react';
import { Link } from 'react-router-dom';

const PostTags = ({ tags }) => {
  return (
    <span className="post-tags">
      {tags.map((tag, index) => {
        let separator = ', ';
        if (index + 1 === tags.length) {
          separator = '';
        }
        return (
          <span key={tag.title || index}>
            <Link className="post-tags--link" to={`tags/${tag.slug}`}>
              {tag.title}
            </Link>
            {separator}
          </span>
        );
      })}
    </span>
  );
};

export default PostTags;
