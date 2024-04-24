import { colors } from '@/config/color';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MenuIcon = () => {
  return (
    <Svg width='33' height='27' viewBox='0 0 44 27' fill='none'>
      <Path
        d='M2 2H42'
        stroke={colors.bg}
        strokeWidth={3.33333}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M2 13.6091H42'
        stroke={colors.bg}
        strokeWidth={3.33333}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M2 25.2175H42'
        stroke={colors.bg}
        strokeWidth={3.33333}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};

export default MenuIcon;
