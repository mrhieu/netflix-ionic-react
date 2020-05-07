export default class Storage {
  static clear() {
    localStorage.clear();
  }

  static getItem(key: string = '') {
    return JSON.parse(localStorage.getItem(key) || 'false');
  }

  static setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
