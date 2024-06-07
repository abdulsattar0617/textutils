import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  const setThemeAU = () => {
    props.setThemeColor({
      color: "#130f40",
      bodyBg: "#c7ecee",
      textAreaBg: "#95afc0",
    });

    props.showAlert(
      "Success",
      "Theme changed to 'Aussian Color theme'",
      "success"
    );
  };

  const setThemeDutch = () => {
    props.setThemeColor({
      color: "#1B1464",
      bodyBg: "#D980FA",
      textAreaBg: "#9980FA",
    });

    props.showAlert(
      "Success",
      "Theme changed to 'Dutch Color theme'",
      "success"
    );
  };

  const setThemeRussian = () => {
    props.setThemeColor({
      color: "#778beb",
      bodyBg: "#303952",
      textAreaBg: "#f8a5c2",
    });

    props.showAlert(
      "Success",
      "Theme changed to 'Russian Color theme'",
      "success"
    );
  };
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme={props.mode}
      style={{ backgroundColor: props.themeColor.bodyBg }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        {/* <Link className="navbar-brand" to="/">
          {props.title}
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              {/* <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link> */}
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/about">
                {props.aboutText}
              </a> */}
              {/* <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link> */}
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form> */}

          {/* space for theme buttons */}
          <button
            type="button"
            className="btn btn-outline-primary mx-3"
            onClick={setThemeDutch}
          >
            Dutch
          </button>
          <button
            type="button"
            className="btn btn-outline-primary mx-3"
            onClick={setThemeRussian}
          >
            Russian
          </button>
          <button
            type="button"
            className="btn btn-outline-primary mx-3"
            onClick={setThemeAU}
          >
            AU
          </button>

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// types of properties(props)
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

// default values for properties(props)
Navbar.defaultProps = {
  title: "Title",
  aboutText: "About",
};
