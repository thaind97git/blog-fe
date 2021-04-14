import React from 'react';
import { useParams } from 'react-router-dom';
import useGetRequest from '@/hooks/useGetRequest';
import EmptyRecord from '@/components/Empty-Record';
import { htmlDecode } from '@/helpers/html';
import { getPostDetailsBySlug } from '@/apis/post';

const PostDetails = () => {
  const params = useParams();
  const { slug } = params;
  const { data: postDetails, fetching } = useGetRequest({
    promiseFunction: getPostDetailsBySlug,
    config: { slug },
  });

  if (!slug || fetching) {
    return null;
  }

  if (!postDetails) {
    return <EmptyRecord title="No Post Found" description="Please try again" />;
  }

  return (
    <div className="blog-details">
      {postDetails && (
        <div
          dangerouslySetInnerHTML={{ __html: htmlDecode(postDetails.content) }}
        />
      )}
    </div>
  );
};

export default PostDetails;
