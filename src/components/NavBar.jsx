import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { X, Menu } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="font-poppins ">
      <div flex items-center justify-between>
        <div className="hidden md:flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Sign Up
          </NavLink>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "underline" : "")}
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "underline" : "")}
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "underline" : "")}
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? "underline" : "")}
            onClick={() => setOpen(false)}
          >
            Signup
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NavBar;
