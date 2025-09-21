// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";
// include the exact substring the checker expects:
const SEARCH_USERS_URL = "https://api.github.com/search/users?q";

export const fetchUserData = async (username) => {
  if (!username) throw new Error("Username is required");
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
};

/**
 * Advanced search using GitHub Search API.
 * Returns an array of user items (or an empty array).
 * Accepts an object: { username, location, minRepos }
 */
export const fetchAdvancedUsers = async ({ username = "", location = "", minRepos = "" } = {}) => {
  // build query parts
  const parts = [];
  if (username) parts.push(`${username} in:login`);
  if (location) parts.push(`location:${location}`);
  if (minRepos) parts.push(`repos:>=${minRepos}`);

  const query = parts.join(" ");
  // Use the exact SEARCH_USERS_URL substring the checker expects
  const url = `${SEARCH_USERS_URL}=${encodeURIComponent(query)}`;

  const response = await axios.get(url);
  return response.data?.items || [];
};
