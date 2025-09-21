import axios from "axios";

const BASE_URL = "https://api.github.com";

// Fetch a single user by username
export async function fetchUserData(username) {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
}

// Advanced search: username + filters (location, repos, etc.)
export async function fetchAdvancedUsers(username, location, minRepos) {
  let query = username ? `${username} in:login` : "";

  if (location) {
    query += ` location:${location}`;
  }
  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  const response = await axios.get(
    `${BASE_URL}/search/users?q=${query}`
  );
  return response.data.items;
}
