import React from "react";

const ListPreviewComponent = ({ text, value }) => {
  return (
    <>
      {(value === "ol") && (text) &&
      <ol>
        {text.split("\n").map((item, index) => <li key={index}>{item}</li>) }
      </ol>
      }
      {(value !== "ol") && (text) &&
      <ul>
        {text.split("\n").map((item, index) => <li key={index}>{item}</li>) }
      </ul>
      }

    </>
  );
};

export default ListPreviewComponent;
