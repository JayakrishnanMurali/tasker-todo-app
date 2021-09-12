import React from "react";

const Todo = () => {
  return (
    <div className="todo">
      <div className="todo__header">
        <div className="todo__header-info">
          <h1>Today's Schedule</h1>

          <div className="todo__info-date">
            <h2>Sunday</h2>
            {/* Add button */}
          </div>

          <button>+</button>

          {/*  */}
          <div className="todo__popup" id="add-todo-popup">
            <input type="text" />
            <button>Add task</button>
            <button>Cancel</button>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Todo;
