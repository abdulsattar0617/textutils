import React, { useState } from "react";
import Button from "./Button";

// import { toBePartiallyChecked } from "@testing-library/jest-dom/matchers";

export default function About() {
  //   let pageStyle = {
  //     backgroundColor: "black",
  //     color: "white",
  //     borderTop: "1px solid white",
  //   };

  const [pageStyle, setpageStyle] = useState({
    backgroundColor: "white",
    color: "black",
    borderTop: "",
  });

  const [btnDMText, setbtnDMText] = useState("Enable Dark Mode");

  const toggleTheme = () => {
    if (pageStyle.color === "black") {
      // change properties to dark theme
      setpageStyle({
        backgroundColor: "black",
        color: "white",
        borderTop: "1px solid white",
      });
      setbtnDMText("Enable Dark Mode");
    } else if (pageStyle.color === "white") {
      // change properties to light theme
      setpageStyle({
        backgroundColor: "white",
        color: "black",
        borderTop: "",
      });
      setbtnDMText("Enable Light Mode");
    }
  };

  return (
    <div className="accordion" id="accordionExample" style={pageStyle}>
      <h1>About Us</h1>
      <div className="accordion-item" style={pageStyle}>
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            style={pageStyle}
          >
            Life at TextUtils
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
          style={pageStyle}
        >
          <div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={pageStyle}>
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
            style={pageStyle}
          >
            Work life balance
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
            style={pageStyle}
          >
            Environment at TextUtils
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
          style={pageStyle}
        >
          <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <Button btnText={btnDMText} handleOnClick={toggleTheme} />
    </div>
  );
}
