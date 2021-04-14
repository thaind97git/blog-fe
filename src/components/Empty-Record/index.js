import React from 'react';
import Icon from '../Icon';
import EmptyIcon from '_static/image/icon/broke.svg';
const EmptyRecord = ({
  icon = EmptyIcon,
  title = 'Empty record',
  description = '',
}) => {
  return (
    <div className="empty-record">
      <div className="empty-record-icon">
        <Icon style={{ width: 80, height: 80 }} src={icon} />
      </div>
      <div className="empty-record-title">{title}</div>
      {description && <div className="empty-record-desc">{description}</div>}
    </div>
  );
};

export default EmptyRecord;
