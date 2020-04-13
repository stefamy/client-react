import React from "react";
import '../../../styles/Widgets.css';
import ImagePreviewComponent from "./ImagePreviewComponent";

const ImageWidgetComponent = ({ handleInput, name, srcText }) => {
  return (
      <>
        <div className="row">
          <div className="col-12">
                <div className="row my-2">
                    <div className="col-12">
                        <input type="text" className="form-control"  onChange={(e) => handleInput(e.target.value, "src")}  placeholder={srcText || "Image URL"}/>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-12">
                      <input type="text" className="form-control" onChange={(e) => handleInput(e.target.value, "name")} placeholder={name || "Widget Name"} />
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
