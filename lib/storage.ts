export function save(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function load(key: string) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}
