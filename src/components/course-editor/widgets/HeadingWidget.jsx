import React, { Component } from "react";
import '../../../styles/Widgets.css';
import HeadingPreview from "./HeadingPreview";

class HeadingWidgetComponent extends Component {

  render() {
    return (
      <>
        <div className="row">
          <div className="col-12">
                <div className="row my-2">
                    <div className="col-12">
                        <input type="text" className="form-control"  onChange={(e) => this.props.handleTextChange(e.target.value)}  placeholder={this.props.previewText || "Widget Text"}/>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-12">
                    <select className="form-control" onChange={(e) => this.props.handleSizeChange(e.target.value)} defaultValue={this.props.textSize || "1"}>
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
                      <input type="text" className="form-control" onChange={(e) => this.props.handleNameChange(e.target.value)} placeholder={this.props.widget.name} />
          </div>
        </div>
                <div className="row">
                  <div className="col-12 my-2">
                    <h4>Preview</h4>
                    <HeadingPreview text={this.props.previewText} size={this.props.textSize}/>
                  </div>
                </div>
              </div>
        </div>
      </>
    );
  }
}

export default HeadingWidgetComponent;
