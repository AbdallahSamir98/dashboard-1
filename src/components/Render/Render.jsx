import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import MainNav from "../Nav/MainNav";

export default function Render() {
  return (
    <>
   
      <MainNav />
      <Outlet />
      
    </>
  );
}
