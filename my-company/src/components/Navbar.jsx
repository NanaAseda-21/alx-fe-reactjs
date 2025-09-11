import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
      <Link to="/" style={{ color: "red", margin: "0 10px" }}>Home</Link>
      <Link to="/about" style={{color:"purple", margin: "0 10px" }}>About</Link>
      <Link to="/services" style={{ color: "green", margin: "0 10px" }}>Services</Link>
      <Link to="/contact" style={{color: "yellow", margin: "0 10px", textDecoration: "none" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
