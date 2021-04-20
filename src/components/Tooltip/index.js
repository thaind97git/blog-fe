import { THEME_TOGGLE } from '@/enums/theme';
import { useShallowEqualSelector } from '@/hooks/useShallowEqualSelector';
import { getTheme } from '@/store/selectors';
import React from 'react';
import ReactTooltip from 'react-tooltip';

const getTooltipTypeByTheme = theme => {
  if (theme === THEME_TOGGLE.dark) {
    return 'light';
  }
  return 'dark';
};

const Tooltip = ({
  children,
  place = 'right',
  effect = 'solid',
  tooltipId,
  title = 'Tooltip',
  disable = true,
  ...others
}) => {
  const theme = useShallowEqualSelector(getTheme);

  if (!tooltipId) {
    return null;
  }
  return (
    <>
      <div data-tip data-for={tooltipId}>
        {children}
      </div>
      <ReactTooltip
        disable={disable}
        type={getTooltipTypeByTheme(theme)}
        id={tooltipId}
        effect={effect}
        place={place}
        {...others}
      >
        {title}
      </ReactTooltip>
    </>
  );
};

export default Tooltip;
