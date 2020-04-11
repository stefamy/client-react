import React, { Component } from "react";
import HeadingWidget from "./widgets/HeadingWidgetComponent";
import ListWidgetComponent from "./widgets/ListWidgetComponent";
import ImageWidgetComponent from "./widgets/ImageWidgetComponent";
import ParagraphWidgetComponent from "./widgets/ParagraphWidgetComponent";

class WidgetListItemComponent extends Component {

  state = {
    name: this.props.widget.name,
    text: this.props.widget.text,
    size: this.props.widget.size,
    src: this.props.widget.src,
    value: this.props.widget.value,
    isUpdated: false
  };


  handleUpdate = () => {
    if (!this.state.isUpdated) {
      this.props.updateWidget(this.props.widget, true);
    }
    this.setState({isUpdated: true})
  }

  handleNameChange = newName => {
    this.setState({ name: newName });
    this.props.widget.name = newName;
    this.handleUpdate();
  };

  handleSrcChange = newSrc => {
    this.setState({ src: newSrc });
    this.props.widget.src = newSrc;
    this.handleUpdate();
  };

  handleValueChange = newValue => {
    this.setState({ value: newValue });
    this.props.widget.value = newValue;
    this.handleUpdate();
  };

  handleTextChange = newText => {
    this.setState({ text: newText });
    this.props.widget.text = newText;
    this.handleUpdate();
  };

  handleSizeChange = (newSize) => {
    this.setState({ size: newSize });
    this.props.widget.size = newSize;
    this.handleUpdate();
  };

  handleTypeChange = newType => {
    this.setState({ type: newType });
    this.props.widget.type = newType;
    this.props.updateWidget(this.props.widget, this.state.isUpdated);
    this.setState({isUpdated: true})
  };

  render() {
    return (
      <>
        <div className="widget row mb-3">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="widget-heading row">
                  <div className="col-6">
                    <h2>{this.state.name || "Unnamed Widget"}</h2>
                  </div>
                  <div className="col-6 d-flex justify-content-end align-items-stretch">

                    <button className="btn btn-warning mr-1 disabled" onClick={() => console.log('moved up')}>
                      <i className="fa fa-arrow-up"></i>
                    </button>
                    <button className="btn btn-warning mr-1 disabled" onClick={() => console.log('moved down')}>
                      <i className="fa fa-arrow-down"></i>
                    </button>
                    <select className="widget-type-select mr-1" onChange={(e) => this.handleTypeChange(e.target.value)} defaultValue={this.props.widget.type || "HEADING"}>
                      <option value="HEADING">Heading Widget</option>
                      <option value="PARAGRAPH">Paragraph Widget</option>
                      <option value="LIST">List Widget</option>
                      <option value="IMAGE">Image Widget</option>
                    </select>
                    <button className="btn btn-danger">
                      <i className="fa fa-trash" onClick={() => this.props.removeWidget(this.props.widget)}></i>
                    </button>
                  </div>
                </div>
                <div className="widget-body">
                  {this.props.widget.type === "HEADING" &&
                  <HeadingWidget
                      handleNameChange={this.handleNameChange}
                      handleTextChange={this.handleTextChange}
                      handleSizeChange={this.handleSizeChange}
                      previewText={this.state.text}
                      textSize={this.state.size}
                      name={this.state.name}
                  />
                  }
                  {this.props.widget.type === "PARAGRAPH" &&
                  <ParagraphWidgetComponent
                      handleNameChange={this.handleNameChange}
                      handleTextChange={this.handleTextChange}
                      previewText={this.state.text}
                      name={this.state.name}
                  />                  }
                  {this.props.widget.type === "LIST" &&
                  <ListWidgetComponent
                      handleNameChange={this.handleNameChange}
                      handleTextChange={this.handleTextChange}
                      handleValueChange={this.handleValueChange}
                      previewText={this.state.text}
                      valueText={this.state.value}
                      name={this.state.name}
                  />
                  }
                  {this.props.widget.type === "IMAGE" &&
                  <ImageWidgetComponent
                      handleNameChange={this.handleNameChange}
                      handleSrcChange={this.handleSrcChange}
                      previewText={this.state.text}
                      srcText={this.state.src}
                      name={this.state.name}
                  />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
    );
  }
}
export default WidgetListItemComponent;
