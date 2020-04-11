import React from "react";

const ParagraphPreview = ({ text }) => {
  return (
    <>
      {text && <p>{text}</p>}
    </>
  );
};

export default ParagraphPreview;
