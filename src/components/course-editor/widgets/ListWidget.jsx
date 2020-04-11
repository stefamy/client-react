import React, { Component } from "react";
import '../../../styles/Widgets.css';
import ListPreview from "./ListPreview";

class ListWidget extends Component {

  render() {
    return (
      <>
        <div className="row">
          <div className="col-12">
                <div className="row my-2">
                    <div className="col-12">
                        <textarea type="text" className="form-control"  onChange={(e) => this.props.handleTextChange(e.target.value)}  placeholder={this.props.previewText || "Enter one list item per line."}/>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-12">
                    <select className="form-control" onChange={(e) => this.props.handleValueChange(e.target.value)} defaultValue={this.props.valueText || "ul"}>
                      <option value="ul">Unordered List</option>
                      <option value="ol">Ordered List</option>
                    </select>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-12">
                      <input type="text" className="form-control" onChange={(e) => this.props.handleNameChange(e.target.value)} placeholder={this.props.widget.name} />
          </div>
        </div>
                <div className="row">
                  <div className="col-12 my-2">
                    <h4>Preview</h4>
                    <ListPreview text={this.props.previewText} value={this.props.valueText}/>
                  </div>
                </div>
              </div>
        </div>
      </>
    );
  }
}

export default ListWidget;
