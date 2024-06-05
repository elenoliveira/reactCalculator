import React from "react";
import PropTypes from "prop-types";
import "./display.css";

function Display({ value }) {
  return <input value={value} id="display" readonly />;
}
export default Display;
