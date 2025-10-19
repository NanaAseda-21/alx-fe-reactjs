import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (!isAuthenticated) {
    alert("You must be logged in to view this page!");
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
