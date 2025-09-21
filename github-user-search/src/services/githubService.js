// services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";

// ✅ Already existing function (keep it!)
export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
};

// ✅ New function for advanced search
export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  // Build query string for GitHub Search API
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;