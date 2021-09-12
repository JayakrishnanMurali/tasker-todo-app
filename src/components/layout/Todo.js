import { ArrowBack, ArrowForward } from "@material-ui/icons";
import React from "react";
import "../../Styles/component-styles/Todo.css";

const Todo = () => {
  const closePopupbyClickingOutisde = () => {
    var todoPopup = document.getElementById("add-todo-popup");
    var overlay = document.getElementById("overlay");
    todoPopup.style.transform = "translate(-50%, -50%) scale(0)";
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
  };

  const loadTodoPopup = () => {
    var todoPopup = document.getElementById("add-todo-popup");
    var overlay = document.getElementById("overlay");

    todoPopup.style.transform = "translate(-50%, -50%) scale(1)";
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "all";
  };
  const closeTodoPopup = () => {
    var todoPopup = document.getElementById("add-todo-popup");
    var overlay = document.getElementById("overlay");

    todoPopup.style.transform = "translate(-50%, -50%) scale(0)";
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
  };

  return (
    <div className="todo">
      <div className="todo__header">
        <div className="todo__header-info">
          <h1>Today's Schedule</h1>

          <div className="todo__info-date">
            <h2>Sunday 12</h2>
            <div>
              <ArrowBack className="arrowIcon" />
              <ArrowForward className="arrowIcon" />
            </div>
          </div>
          {/*  */}
        </div>
        <button
          className="svg__todo-btn"
          id="add-todo-btn"
          onClick={loadTodoPopup}
        >
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            width="100%"
            id="blobSvg"
          >
            <path
              id="blob"
              d="M406,306.5Q363,363,306.5,374Q250,385,165,402.5Q80,420,53,335Q26,250,88,200Q150,150,200,81Q250,12,327.5,53.5Q405,95,427,172.5Q449,250,406,306.5Z"
              fill="#2ec4b6"
            ></path>
          </svg>
          <h1>+</h1>
        </button>

        {/*  */}
      </div>

      <div className="todo__popup" id="add-todo-popup">
        <input
          type="text"
          className="mainInput"
          placeholder="Add your tasks here..."
        />
        <input type="text" className="descInput" placeholder="Description" />
        <div className="popup__btn">
          <button className="popup__addBtn">Add task</button>
          <button
            className="popup__cancelBtn"
            id="add-todo-btnCancel"
            onClick={closeTodoPopup}
          >
            Cancel
          </button>
        </div>
      </div>
      <div id="overlay" onClick={closePopupbyClickingOutisde}></div>
    </div>
  );
};

export default Todo;
