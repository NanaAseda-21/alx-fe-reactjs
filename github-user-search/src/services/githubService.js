// src/services/githubService.js

const BASE_URL = "https://api.github.com";

export const searchUsers = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/users?q=${query}`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
