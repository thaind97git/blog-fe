import React from 'react';
import { useParams } from 'react-router-dom';

import { getPostDetailsBySlug } from '@/apis/post';

import useGetRequest from '@/hooks/useGetRequest';
import EmptyRecord from '@/components/Empty-Record';

import { parseMarkdown } from '@/helpers/markdown';
import { postTimeFormat } from '@/utils';

const PostDetails = () => {
  const params = useParams();
  const { slug } = params;
  const { data: postDetails, fetching } = useGetRequest({
    promiseFunction: getPostDetailsBySlug,
    param: { slug },
  });

  if (!slug || fetching) {
    return null;
  }

  if (!postDetails) {
    return <EmptyRecord title="No Post Found" description="Please try again" />;
  }

  return (
    <div className="blog-details">
      <span className="datetime">
        {postTimeFormat(postDetails.publishedAt)}
      </span>
      <h1>{postDetails.title}</h1>
      {postDetails && (
        <div
          dangerouslySetInnerHTML={{
            __html: parseMarkdown(postDetails.content),
          }}
        />
      )}
    </div>
  );
};

export default PostDetails;
