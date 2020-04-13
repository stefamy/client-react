import React from "react";
import '../../../styles/Widgets.css';
import ListPreviewComponent from "./ListPreviewComponent";

const ListWidgetComponent = ({ handleInput, previewText, name, valueText }) => {
    return (
      <>
        <div className="row">
          <div className="col-12">
                <div className="row my-2">
                    <div className="col-12">
                        <textarea type="text" className="form-control"  onChange={(e) => handleInput(e.target.value, "text")}  placeholder={previewText || "Enter one list item per line."}/>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-12">
                    <select className="form-control" onChange={(e) => handleInput(e.target.value, "value")} defaultValue={valueText || "ul"}>
                      <option value="ul">Unordered List</option>
                      <option value="ol">Ordered List</option>
                    </select>
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
                    <ListPreviewComponent text={previewText} value={valueText}/>
                  </div>
                </div>
              </div>
        </div>
      </>
    );
}

export default ListWidgetComponent;
