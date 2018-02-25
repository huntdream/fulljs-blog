import { IS_DRAWER_OPEN } from './constants';

export const toggleDrawer = bool => ({
  type: IS_DRAWER_OPEN,
  isDrawerOpen: bool
});
