import React from "react";
import '../../../styles/Widgets.css';
import HeadingPreviewComponent from "./HeadingPreviewComponent";

const HeadingWidgetComponent = ({ handleTextChange, handleSizeChange, handleNameChange, name, previewText, textSize }) => {
    return (
      <>
        <div className="row">
          <div className="col-12">
                <div className="row my-2">
                    <div className="col-12">
                        <input type="text" className="form-control"  onChange={(e) => handleTextChange(e.target.value)}  placeholder={previewText || "Widget Text"}/>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-12">
                    <select className="form-control" onChange={(e) => handleSizeChange(e.target.value)} defaultValue={textSize || "1"}>
                      <option value="1">Heading 1</option>
                      <option value="2">Heading 2</option>
                      <option value="3">Heading 3</option>
                      <option value="4">Heading 4</option>
                      <option value="5">Heading 5</option>
                      <option value="6">Heading 6</option>
                    </select>
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
                    <HeadingPreviewComponent text={previewText} size={textSize}/>
                  </div>
                </div>
              </div>
        </div>
      </>
    );
}

export default HeadingWidgetComponent;
