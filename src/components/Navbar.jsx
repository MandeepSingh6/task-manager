import React from "react";
import HomePage from "../pages/HomePage";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-700 px-4 py-2 text-white">
      <div className="flex justify-between">
        <h1 className="hover:cursor-pointer" onClick={() => navigate("/")}>
          Task Manager
        </h1>
        <button onClick={() => navigate("/new")}>+Add New Task</button>
      </div>
    </div>
  );
};

export default Navbar;
