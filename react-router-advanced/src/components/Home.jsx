import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to React Router Advanced Demo</h1>
      <nav>
        <Link to="/about">About</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/posts/1">Sample Post</Link>
      </nav>
    </div>
  );
}

export default Home;
