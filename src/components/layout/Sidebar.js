import React from "react";
import "../../Styles/component-styles/Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        {/* Add a logo */}
        <h4>tasker.io</h4>
      </div>

      <div className="sidebar__weeklyPinned">
        <div className="sidebar__wp-header-section">
          <h2>Weekly pinned</h2>
          <a href="#">View all</a>
        </div>

        <div className="sidebar__wp-boxContainer">
          <div className="sidebar__bc-avatar">
            <div className="avatar">
              <h3>B</h3>
            </div>
          </div>
          <div className="sidebar__bc-info">
            <h3 className="sidebar__bc-heading">Call doctor for tests</h3>
            <h4 className="sidebar__bc-date">15 Mar 2020 - 9:00 AM</h4>
            <div className="sidebar__info-tag">
              <h4>Personal</h4>
            </div>
            <h4 className="sidebar__bc-desc">
              Ask for blood tests and GYM cerificates
            </h4>
          </div>
        </div>

        <div className="sidebar__wp-boxContainer">
          <div className="sidebar__bc-avatar">
            <div className="avatar">
              <h3>A</h3>
            </div>
          </div>
          <div className="sidebar__bc-info">
            <h3 className="sidebar__bc-heading">Call doctor for tests</h3>
            <h4 className="sidebar__bc-date">15 Mar 2020 - 9:00 AM</h4>
            <div className="sidebar__info-tag">
              <h4>Personal</h4>
            </div>
            <h4 className="sidebar__bc-desc">
              Ask for blood tests and GYM cerificates
            </h4>
          </div>
        </div>

        <div className="sidebar__AddNewPin">
          <button>+</button>
          <h2>Add new weekly pin</h2>
        </div>

        <div className="sidebar__calender">{/* add calender here */}</div>
      </div>
    </div>
  );
};
