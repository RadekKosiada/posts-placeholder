import React from 'react';
import '../App.scss';
import {Link } from "react-router-dom";

export default function Nav(props) {

  return (
    <div className="nav-menu">
      <Link to="/">
      <h1>Home</h1>
      </Link>
      <Link to="/users">
      <h1>Users</h1>
      </Link>
    </div>
  )
}