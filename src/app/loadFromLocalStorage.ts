export const loadFromLocalStorage = <T>(key: string, fallback: T): T => {
  try {
    const data = localStorage.getItem(key);
    return data ? (JSON.parse(data) as T) : fallback;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return fallback;
  }
};
