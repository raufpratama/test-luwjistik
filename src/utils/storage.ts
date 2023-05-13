const getLocalStorageItem = (key: string): any => {
  const itemValue = localStorage.getItem(key);
  if (itemValue) {
    const decodedValue = atob(itemValue);
    try {
      return JSON.parse(decodedValue);
    } catch {
      return decodedValue;
    }
  }
  return null;
};

const setLocalStorageItem = <T>(key: string, value: T) => {
  const stringfiedValue = typeof value === "string" ? value : JSON.stringify(value);
  localStorage.setItem(key, btoa(stringfiedValue));
  window.dispatchEvent(new Event("storage"))
};

const removeLocalStorageItem = (key: string) => {
  localStorage.removeItem(key);
};

const clearLocalStorage = () => {
  localStorage.clear();
};

const storage = {
    getItem: getLocalStorageItem,
    setItem: setLocalStorageItem,
    removeItem: removeLocalStorageItem,
    clear: clearLocalStorage,
};

export default storage;