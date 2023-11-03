export const getAllItems = async () => {
  const response = await fetch(
    "https://repliq-e-store-default-rtdb.firebaseio.com/items.json"
  );
  const data = await response.json();
  const allItems = [];

  for (const key in data) {
    allItems.push({
      id: key,
      ...data[key],
    });
  }

  return allItems;
};
