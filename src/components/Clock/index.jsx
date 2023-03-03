import React, { useEffect, useState } from "react";
import useClock from "../../hooks/useClock";
import PropTypes from "prop-types";

Clock.propTypes = {};

function Clock() {
  const { timeString } = useClock();

  return <p style={{ fontSize: "40px" }}>{timeString}</p>;
}

export default Clock;
