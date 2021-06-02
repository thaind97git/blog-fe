import React from 'react';

import { getSocials } from '@/apis/profile';

import Tooltip from '@/components/Tooltip';

import { ensureArray } from '@/utils';
import { SOCIAL_ICONS } from '../../constant/socials';
import useGet from '@/hooks/useGet';

const Socials = ({ openDrawer }) => {
  const { data: socials, fetching: fetchingSocials } = useGet({
    func: getSocials,
  });

  if (fetchingSocials) {
    return null;
  }
  if (!socials || socials?.results?.length === 0) {
    return <span>No Available</span>;
  }
  return (
    <div className="social-list">
      {ensureArray(socials?.results).map(social => {
        const Icon = SOCIAL_ICONS[social.code];
        return (
          <Tooltip
            disable={openDrawer}
            tooltipId={social.id}
            title={social.name}
            key={social.id}
          >
            <p>
              <a
                className="social-list--link"
                href={social.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {Icon && <Icon />}
                <span>&nbsp;</span>
                <span>{social.name}</span>
              </a>
            </p>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default Socials;
