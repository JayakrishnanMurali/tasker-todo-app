import React from "react";
import { Sidebar } from "./components/layout/Sidebar";
import Todo from "./components/layout/Todo";
import UserWidget from "./components/layout/UserWidget";
import "./Styles/App.css";

export const App = () => (
  <div className="app">
    <Sidebar className="test" />
    <Todo />
    <UserWidget />
  </div>
);
