import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";

export default function App() {
  return (
    <Router>
      <Header />
      <nav style={{ padding: "10px", background: "#ddd" }}>
        <Link to="/">Home</Link>
      </nav>
      
      <div>
      <h1>GitHub User Search</h1>
      <Search />
    </div>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    
  );
}




