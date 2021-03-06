import React from 'react';
import { useParams } from 'react-router-dom';

import { getPostDetailsBySlug } from '@/apis/post';

import EmptyRecord from '@/components/Empty-Record';
import Skeleton from '@/components/Skeleton';
import useGet from '@/hooks/useGet';

import { parseMarkdown } from '@/helpers/markdown';
import { postTimeFormat } from '@/utils';
import useDidMountEffect from '@/hooks/useDidMountEffect';

const PostDetails = () => {
  const params = useParams();
  const { slug } = params;
  const { data: postDetails, fetching } = useGet({
    func: () => getPostDetailsBySlug({ slug }),
  });

  useDidMountEffect(() => {
    const blogContent =
      document.getElementsByClassName('blog-details__content')?.[0] || [];
    for (const childNode of blogContent.childNodes) {
      for (const child of childNode.childNodes) {
        if (child.nodeName?.toUpperCase() === 'IMG') {
          childNode.style.width = '100%';
          childNode.style['margin-left'] = 'auto';
          childNode.style['margin-right'] = 'auto';
        }
      }
    }
  }, [postDetails]);

  if (!slug) {
    return null;
  }

  if (fetching) {
    return <Skeleton code />;
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
