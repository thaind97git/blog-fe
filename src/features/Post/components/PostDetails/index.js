import React from 'react';
import { useParams } from 'react-router-dom';

import { getPostDetailsBySlug } from '@/apis/post';

import EmptyRecord from '@/components/Empty-Record';

import { parseMarkdown } from '@/helpers/markdown';
import { postTimeFormat } from '@/utils';
import useGet from '@/hooks/useGet';

const PostDetails = () => {
  const params = useParams();
  const { slug } = params;
  const { data: postDetails, fetching } = useGet({
    func: () => getPostDetailsBySlug({ slug }),
  });

  if (!slug || fetching) {
    return null;
  }

  if (!postDetails) {
    return <EmptyRecord title="No Post Found" description="Please try again" />;
  }

  return (
    <div className="blog-details">
      <span className="blog-details__datetime">
        {postTimeFormat(postDetails.publishedAt)}
      </span>
      <h1 className="blog-details__title">{postDetails.title}</h1>
      {postDetails && (
        <div
          className="blog-details__content"
          dangerouslySetInnerHTML={{
            __html: parseMarkdown(postDetails.content),
          }}
        />
      )}
    </div>
  );
};

export default PostDetails;