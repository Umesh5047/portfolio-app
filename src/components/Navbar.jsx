import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  return (
    <nav className="p-4 bg-white dark:bg-gray-800 shadow flex justify-between items-center">
      <Link to="/" className="font-bold text-lg">Portfolio</Link>
      <div className="flex gap-4">
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
