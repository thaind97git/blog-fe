import React, { useMemo } from 'react';

import {
  BulletList,
  List,
  Facebook,
  Instagram,
  Code,
} from 'react-content-loader';
import { useShallowEqualSelector } from '@/hooks/useShallowEqualSelector';
import { getTheme } from '@/store/selectors';
import { THEME_TOGGLE } from '@/enums/theme';

const getSkeletonType = ({ list, bulletList, code, facebook, instagram }) => {
  switch (true) {
    case list:
      return List;
    case bulletList:
      return BulletList;
    case code:
      return Code;
    case facebook:
      return Facebook;
    case instagram:
      return Instagram;
    default:
      return BulletList;
  }
};

const Skeleton = ({
  list,
  bulletList,
  code,
  facebook,
  instagram,
  ...others
}) => {
  const currentTheme = useShallowEqualSelector(getTheme);

  const skeletonStyles = useMemo(() => {
    const styles = {
      backgroundColor: '#bebebe33',
      foregroundColor: '#f1f1f1',
    };
    if (currentTheme === THEME_TOGGLE.dark) {
      styles.foregroundColor = '#7e7e7e';
    }
    return styles;
  }, [currentTheme]);

  const SkeletonType = getSkeletonType({
    list,
    bulletList,
    code,
    facebook,
    instagram,
  });

  return <SkeletonType {...skeletonStyles} {...others} />;
};

export default Skeleton;
