import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navigation() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        {isAuthenticated && <Link to="/profile">Profile</Link>}
      </div>
      <div className="auth-buttons">
        {!isAuthenticated ? (
          <button onClick={() => loginWithRedirect()}>Log In / Sign Up</button>
        ) : (
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
