import { useState } from "react";
import { fetchUserData, fetchAdvancedUsers } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState(null);
  const [users, setUsers] = useState([]); // for advanced search results
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Basic username search
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);
    setUsers([]);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Advanced search
  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);
    setUsers([]);

    try {
      const data = await fetchAdvancedUsers({ username, location, minRepos });
      setUsers(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Basic search */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button type="submit">Search</button>
      </form>

      {/* Advanced search */}
      <form onSubmit={handleAdvancedSearch} style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button type="submit">Advanced Search</button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Basic single user result */}
      {userData && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <h3>{userData.name || userData.login}</h3>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}

      {/* Advanced search results list */}
      {users.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Search Results</h3>
          <ul>
            {users.map((user) => (
              <li key={user.id} style={{ marginBottom: "15px" }}>
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  width="50"
                  style={{ borderRadius: "50%", marginRight: "10px" }}
                />
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  {user.login}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
