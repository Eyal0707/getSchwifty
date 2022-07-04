export default class LocalStorageSaver {
  SaveObject(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
  }

  GetObject(name) {
    try {
      return JSON.parse(localStorage.getItem(name));
    } catch {
      return null;
    }
  }
}
