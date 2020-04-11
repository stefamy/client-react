import React from "react";
import '../../../styles/Widgets.css';
import ImagePreviewComponent from "./ImagePreviewComponent";

const ImageWidgetComponent = ({ handleSrcChange, handleNameChange, name, srcText }) => {
  return (
      <>
        <div className="row">
          <div className="col-12">
                <div className="row my-2">
                    <div className="col-12">
                        <input type="text" className="form-control"  onChange={(e) => handleSrcChange(e.target.value)}  placeholder={srcText || "Image URL"}/>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-12">
                      <input type="text" className="form-control" onChange={(e) => handleNameChange(e.target.value)} placeholder={name || "Widget Name"} />
          </div>
        </div>
                <div className="row">
                  <div className="col-12 my-2">
                    <h4>Preview</h4>
                    <ImagePreviewComponent src={srcText}/>
                </div>
                </div>
              </div>
        </div>
      </>
    );
}

export default ImageWidgetComponent;
