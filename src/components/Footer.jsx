import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="hover:cursor-pointer fixed bottom-0 bg-[#6b12a6] w-full text-center text-white py-1.5"
    >
      Task Manager
    </div>
  );
};

export default Footer;
