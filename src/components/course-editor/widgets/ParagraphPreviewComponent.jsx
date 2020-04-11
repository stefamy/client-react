import React from "react";

const ParagraphPreviewComponent = ({ text }) => {
  return (
    <>
      {text && <p>{text}</p>}
    </>
  );
};

export default ParagraphPreviewComponent;
