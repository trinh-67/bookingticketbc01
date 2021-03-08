import React, { Component } from "react";
//the thay thế thẻ a trongb routing của react router dom
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink activeStyle={{fontWeight:'bold'}} activeClassName="bg-dark text-light" className="navbar-brand" to="/home">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink activeStyle={{fontWeight:'bold'}}  activeClassName="bg-dark text-light" className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeStyle={{fontWeight:'bold'}}  activeClassName="bg-dark text-light" className="nav-link" to="/contact">
                Link
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink activeClassName="bg-dark text-light"
                className="nav-link dropdown-toggle"
                to="/login"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink activeClassName="bg-dark text-light" className="dropdown-item" to="/register">
                  Action 1
                </NavLink>
                <NavLink className="dropdown-item" to="#">
                  Action 2
                </NavLink>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
