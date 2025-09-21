// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";

// ✅ Single user lookup
export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
};

// ✅ Advanced user search
export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(
    `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`
  );

  return response.data.items;
};
