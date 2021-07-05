import {Store} from "pullstate";

export interface IUIStore {
  theme: {
    isDark: boolean;
  };
  timesThemeChanged: number;
}

// tslint:disable-next-line:variable-name
export const UIStore = new Store<IUIStore>({
  theme: {
    isDark: false
  },
  timesThemeChanged: 0
});
