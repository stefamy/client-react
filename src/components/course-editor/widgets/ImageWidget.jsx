import React, { Component } from "react";
import '../../../styles/Widgets.css';
import ImagePreview from "./ImagePreview";

class ImageWidget extends Component {

  render() {

    return (
      <>
        <div className="row">
          <div className="col-12">
                <div className="row my-2">
                    <div className="col-12">
                        <input type="text" className="form-control"  onChange={(e) => this.props.handleSrcChange(e.target.value)}  placeholder={this.props.srcText || "Image URL"}/>
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
                    <ImagePreview src={this.props.srcText}/>
                  </div>
                </div>
              </div>
        </div>
      </>
    );
  }
}

export default ImageWidget;
