import React from "react";

export default function Button({btnText, handleOnClick}) {
  return (
    <div>
      <button type="button" className="btn btn-primary my-3" onClick={handleOnClick}>
        {btnText}
      </button>
    </div>
  );
}
