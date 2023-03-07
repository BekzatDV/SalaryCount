import { Button } from "@mui/material";
import React, { useState } from "react";

const Counter = (props) => {
  return (
    <div>
      <Button variant="contained" onClick={props.dicrement}>
        -
      </Button>
      <h3>{props.counter}</h3>
      <Button variant="contained" onClick={props.increment}>
        +
      </Button>
    </div>
  );
};

export default Counter;
