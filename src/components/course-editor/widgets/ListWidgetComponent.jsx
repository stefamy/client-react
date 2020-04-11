import React from "react";
import '../../../styles/Widgets.css';
import ListPreviewComponent from "./ListPreviewComponent";

const ListWidgetComponent = ({ handleTextChange, handleValueChange, handleNameChange, previewText, name, valueText }) => {
    return (
      <>
        <div className="row">
          <div className="col-12">
                <div className="row my-2">
                    <div className="col-12">
                        <textarea type="text" className="form-control"  onChange={(e) => handleTextChange(e.target.value)}  placeholder={previewText || "Enter one list item per line."}/>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-12">
                    <select className="form-control" onChange={(e) => handleValueChange(e.target.value)} defaultValue={valueText || "ul"}>
                      <option value="ul">Unordered List</option>
                      <option value="ol">Ordered List</option>
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
                    <ListPreviewComponent text={previewText} value={valueText}/>
                  </div>
                </div>
              </div>
        </div>
      </>
    );
}

export default ListWidgetComponent;
