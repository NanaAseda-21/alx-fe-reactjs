import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Blog Post ID: {id}</h2>
      <p>This page is dynamically loaded based on the post ID in the URL.</p>
    </div>
  );
}

export default Post;
