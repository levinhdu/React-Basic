import React from "react";
import PropTypes from "prop-types";
import "./MagicBox.scss";
import useMagicColor from "../../hooks/useMagicColor";

MagicBox.propTypes = {};

function MagicBox(props) {
  const color = useMagicColor();
  return <div className="magic-box" style={{ backgroundColor: color }}></div>;
}

export default MagicBox;
