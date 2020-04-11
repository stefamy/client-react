import React from "react";

const ListPreview = ({ text, value }) => {
  return (
    <>
      {(value === "ol") &&
      <ol>
        {text.split("\n").map(item => <li>{item}</li>) }
      </ol>
      }
      {(value !== "ol") &&
      <ul>
        {text.split("\n").map(item => <li>{item}</li>) }
      </ul>
      }

    </>
  );
};

export default ListPreview;
