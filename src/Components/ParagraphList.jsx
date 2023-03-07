import React from "react";

const ParagraphList = (props) => {
  return (
    <div>
      <ul>
        {props.paragraphs.map((item) => (
          <li key={item.id}>{item.paragraph}</li>
        ))}
      </ul>
    </div>
  );
};

export default ParagraphList;
