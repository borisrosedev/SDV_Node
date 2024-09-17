class LocalStorageDataSource {
  static getSpecificItem(key) {
    const item = localStorage.getItem(key);
    if (!item) return `${key} does not exist in localstorage`;
    return JSON.parse(item);
  }

  static removeSpecificItem(key) {
    localStorage.removeItem(key);
  }

  static setSpecificItem(key, value) {
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export default LocalStorageDataSource;
