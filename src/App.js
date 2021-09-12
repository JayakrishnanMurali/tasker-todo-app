import React from "react";
import { Sidebar } from "./components/layout/Sidebar";
import Todo from "./components/layout/Todo";
import "./Styles/App.css";

export const App = () => (
  <div className="app">
    <Sidebar />
    <Todo />
  </div>
);
