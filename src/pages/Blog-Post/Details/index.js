import { htmlDecode } from '@/helpers/html';
import useGetRequest from '@/hooks/useGetRequest';
import React from 'react';
const BlogDetails = () => {
  const { data } = useGetRequest({
    url: '/posts/7dc4ce9c-576e-4d65-b9b4-bbd197b3df9f',
  });

  if (!data) {
    return 'Fetching';
  }
  return (
    <div className="blog-details">
      {data && (
        <div dangerouslySetInnerHTML={{ __html: htmlDecode(data.content) }} />
      )}
    </div>
  );
};

export default BlogDetails;
