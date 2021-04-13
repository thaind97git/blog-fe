import { isServer } from '../utils';

const TOKEN_NAME = '_ut';
const THEME_NAME = '_theme';

export const saveToken = token =>
  !isServer && token ? localStorage.setItem(TOKEN_NAME, token) : null;
export const getToken = () =>
  !isServer ? localStorage.getItem(TOKEN_NAME) : null;
export const removeToken = () =>
  !isServer ? localStorage.removeItem(TOKEN_NAME) : null;

export const saveTheme = theme =>
  !isServer ? localStorage.setItem(THEME_NAME, theme) : null;
export const getTheme = () =>
  !isServer ? localStorage.getItem(THEME_NAME) : null;
export const removeTheme = () =>
  !isServer ? localStorage.removeItem(THEME_NAME) : null;
