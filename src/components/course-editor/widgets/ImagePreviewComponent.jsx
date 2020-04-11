import React from "react";

const ImagePreviewComponent = ({ src, width, height }) => {
  return (
    <>
      {src &&
      <img className="preview-image" src={src} width={width} height={height} alt=""/>
      }
      {!src &&
      <img
          src={`${process.env.PUBLIC_URL}/img/icons/addimage.png`}
          alt="no_selection"
          className="no-selection-img-icon preview-image"
          width={200}
      />
      }
    </>
  );
};

export default ImagePreviewComponent;
