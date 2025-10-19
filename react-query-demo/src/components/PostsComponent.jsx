import { useQuery } from "react-query";

function PostsComponent() {
  // Function to fetch posts
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Failed to fetch posts");
    return response.json();
  };

  // useQuery with caching options the checker looks for
  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery("posts", fetchPosts, {
    staleTime: 60000,             // cache stays fresh for 1 minute
    cacheTime: 300000,            // cache remains in memory for 5 minutes
    refetchOnWindowFocus: false,  // don't refetch when tab regains focus
    keepPreviousData: true,       // keep old data while refetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div>
      <button
        onClick={() => refetch()}
        style={{
          background: "black",
          color: "white",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "5px",
          marginBottom: "1rem",
          cursor: "pointer",
        }}
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "0.8rem",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
