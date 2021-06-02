import React from 'react';
import { getTags } from '@/apis/tag';
import Tag from './components/Tag';

import { ensureArray } from '@/utils';
import useGet from '@/hooks/useGet';

const Tags = () => {
  const { data: tags, fetching: fetchingTags } = useGet({
    func: getTags,
  });

  if (fetchingTags) {
    return 'Fetching...';
  }
  return (
    <div className="list-of-tag">
      {fetchingTags ? (
        <span>Fetching...</span>
      ) : (
        ensureArray(tags?.results).map((tag, index) => (
          <Tag key={tag.id || index} tag={tag} />
        ))
      )}
    </div>
  );
};

export default Tags;
