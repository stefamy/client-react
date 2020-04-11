import React from "react";

const ListPreviewComponent = ({ text, value }) => {
  return (
    <>
      {(value === "ol") &&
      <ol>
        {text.split("\n").map((item, index) => <li key={index}>{item}</li>) }
      </ol>
      }
      {(value !== "ol") &&
      <ul>
        {text.split("\n").map((item, index) => <li key={index}>{item}</li>) }
      </ul>
      }

    </>
  );
};

export default ListPreviewComponent;
