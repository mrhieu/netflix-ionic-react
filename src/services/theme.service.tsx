/**
  Dark Mode service: restore current settings, toggle Dark Mode

  How to use:
  - Require Ionic Storage (https://ionicframework.com/docs/building/storage#usage)

  ```
    ionic cordova plugin add cordova-sqlite-storage && npm install --save @ionic/storage
  ```
  - Import IonicStorageModule in app.module.ts
  - Restore current settings in app.component.ts

  ```
    ...
    this.themeService.restore();
  ```
  - Add toggle control in desired page
*/

import Storage from './localstorage.service';

const DARK_MODE_CLASS = 'dark-theme';

export default class ThemeService {
  static toggleDarkMode(isDark = true, needUpdate = true) {
    if (needUpdate) Storage.setItem(DARK_MODE_CLASS, isDark);
    document.body.classList.toggle(DARK_MODE_CLASS, isDark);
  }

  static getCurrentSetting() {
    return Storage.getItem(DARK_MODE_CLASS);
  }

  /**
   * Experimental - unfinished
   * */
  static useAutoDarkMode() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    this.toggleDarkMode(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((mediaQuery) => this.toggleDarkMode(mediaQuery.matches));
  }

  static restore() {
    this.toggleDarkMode(this.getCurrentSetting(), false);
  }
}
