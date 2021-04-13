import React, { useState } from 'react';
import { saveTheme } from '@/helpers/local-storage';

const getSwitchSizeByType = ({ small, medium, large }) => {
  switch (true) {
    case small:
      return 0.4;
    case medium:
      return 0.6;
    case large:
      return 0.9;
    default:
      return 0.6;
  }
};

const SwitchTheme = ({ value = false, onChange, small, medium, large }) => {
  const [checked, setChecked] = useState(value);
  return (
    <div
      style={{
        transform: `scale(${getSwitchSizeByType({ small, medium, large })})`,
      }}
      className="switch-theme"
    >
      <input
        onChange={event => {
          const { checked } = event.target;
          setChecked(checked);
          saveTheme(checked);
          typeof onChange === 'function' && onChange(event);
        }}
        type="checkbox"
        id="toggle_checkbox"
        value={checked}
        defaultChecked={checked}
      />

      <label htmlFor="toggle_checkbox">
        <div id="star">
          <div className="star" id="star-1">
            ★
          </div>
          <div className="star" id="star-2">
            ★
          </div>
        </div>
        <div id="moon"></div>
      </label>
    </div>
  );
};

export default SwitchTheme;
