import React from "react";
import '../../../styles/Widgets.css';
import ParagraphPreviewComponent from "./ParagraphPreviewComponent";

const ParagraphWidgetComponent = ({ handleTextChange, handleNameChange, previewText, name }) => {
  return (
      <>
        <div className="row">
          <div className="col-12">
            <div className="row my-2">
              <div className="col-12">
                <textarea type="text" className="form-control"
                          onChange={(e) => handleTextChange(e.target.value)}
                          placeholder={previewText || "Widget Text"}/>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-12">
                <input type="text" className="form-control"
                       onChange={(e) => handleNameChange(e.target.value)}
                       placeholder={name || "Widget Name"}/>
              </div>
            </div>
            <div className="row">
              <div className="col-12 my-2">
                <h4>Preview</h4>
                <ParagraphPreviewComponent text={previewText}/>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default ParagraphWidgetComponent;
