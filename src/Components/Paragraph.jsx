import { Button } from "@mui/material";
import React, { useState } from "react";

const Paragraph = (props) => {
  let [paragraph, setParagraph] = useState("");
  let handleInput = (e) => {
    setParagraph(e.target.value);
  };
  let handleAdd = () => {
    if (!paragraph) {
      alert("Заполните поле");
      return;
    }
    let newParagraph = {
      paragraph: paragraph,
      id: Date.now(),
    };
    props.hendleParagraph(newParagraph);
    setParagraph("");
  };
  return (
    <div>
      <input value={paragraph} type="text" onChange={handleInput} />
      <Button onClick={handleAdd}>Add</Button>
    </div>
  );
};

export default Paragraph;
