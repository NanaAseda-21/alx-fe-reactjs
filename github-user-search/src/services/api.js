// Example function to simulate API calls
export async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Hello from services/api.js" });
    }, 500);
  });
}
