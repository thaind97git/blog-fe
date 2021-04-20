import React from 'react';
import Tooltip from '@/components/Tooltip';
import { SOCIAL_ICONS } from '../../constant/socials';

const Socials = ({ socials = [], fetching, openDrawer }) => {
  if (fetching) {
    return null;
  }
  if (!socials || socials.length === 0) {
    return <span>No Available</span>;
  }
  return (
    <div className="social-list">
      {socials.map(social => {
        const Icon = SOCIAL_ICONS[social.code];
        return (
          <Tooltip
            disable={openDrawer}
            tooltipId={social.name}
            title={social.name}
            key={social.id || social.name}
          >
            <p>
              <a
                className="social-list--link"
                href={social.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon />
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
