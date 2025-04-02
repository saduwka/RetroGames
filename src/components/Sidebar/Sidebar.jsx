import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h3>Gaming Collection</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/consoles">Platform</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
        <li>
          <Link to="/creators">Creators</Link>
        </li>
        <li>
          <Link to="/developers">Developers</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
