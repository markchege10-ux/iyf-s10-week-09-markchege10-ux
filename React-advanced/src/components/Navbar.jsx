import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">CommunityHub</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/create">Create Post</Link>
      </div>
    </nav>
  );
}

export default Navbar;