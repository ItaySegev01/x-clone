import { atom } from 'recoil';

export const activeNavLinkAtom = atom({
  key: 'activeNavLinkState', // unique ID (with respect to other atoms/selectors)
  default: 'Home', // default value (aka initial value)
});
