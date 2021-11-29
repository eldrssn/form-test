export const getValueFromLocalStorage = (key, defaultValue) => {
  try {
    const localStorageValue = localStorage.getItem(key);
    return JSON.parse(localStorageValue) || defaultValue;
  } catch (error) {
    return defaultValue;
  }
};

export const setValueToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
};
