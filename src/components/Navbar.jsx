import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#6b12a6] px-4 py-2 text-white">
      <div className="flex justify-between">
        <h1
          className="hover:cursor-pointer text-xl font-bold"
          onClick={() => navigate("/")}
        >
          Task Manager
        </h1>
        <button className="text-lg" onClick={() => navigate("/new")}>
          +Add New Task
        </button>
      </div>
    </div>
  );
};

export default Navbar;
