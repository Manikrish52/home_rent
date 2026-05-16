import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function ProtectedRoute() {
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <Outlet />
      </div>
    </>
  );
}