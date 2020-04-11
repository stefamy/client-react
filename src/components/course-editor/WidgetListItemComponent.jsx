import React, { Component } from "react";
import HeadingWidget from "./widgets/HeadingWidget";
import ListWidget from "./widgets/ListWidget";
import ImageWidget from "./widgets/ImageWidget";
import { connect } from "react-redux";
import ParagraphWidget from "./widgets/ParagraphWidget";

class WidgetListItemComponent extends Component {

  state = {
    name: this.props.widget.name || "Unnamed Widget",
    text: this.props.widget.text || "",
    size: this.props.widget.size || "1",
    src: this.props.widget.src || "",
    value: this.props.widget.value || "",
    isUpdated: false
  };


  handleNameChange = newName => {
    this.setState({ name: newName });
    this.props.widget.name = newName;
    if (!this.state.isUpdated) {
      this.props.updateWidget(this.props.widget, true);
    }
    this.setState({isUpdated: true})
  };

  handleSrcChange = newSrc => {
    this.setState({ src: newSrc });
    this.props.widget.src = newSrc;
    if (!this.state.isUpdated) {
      this.props.updateWidget(this.props.widget, true);
    }
    this.setState({isUpdated: true})
  };

  handleValueChange = newValue => {
    this.setState({ value: newValue });
    this.props.widget.value = newValue;
    if (!this.state.isUpdated) {
      this.props.updateWidget(this.props.widget, true);
    }
    this.setState({isUpdated: true})
  };

  handleTextChange = newText => {
    this.setState({ text: newText });
    this.props.widget.text = newText;
    if (!this.state.isUpdated) {
      this.props.updateWidget(this.props.widget, true);
    }
    this.setState({isUpdated: true})
  };

  handleSizeChange = (newSize) => {
    this.setState({ size: newSize });
    this.props.widget.size = newSize;
    if (!this.state.isUpdated) {
      this.props.updateWidget(this.props.widget, true);
    }
    this.setState({isUpdated: true})
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
        <div className={`widget row mb-3 order-` + this.props.widget.orderWidget}>
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
                      <i className="fa fa-trash" onClick={this.props.removeWidget}></i>
                    </button>
                  </div>
                </div>
                <div className="widget-body">
                  {this.props.widget.type === "HEADING" &&
                  <HeadingWidget
                      widget={this.props.widget}
                      handleNameChange={this.handleNameChange}
                      handleTextChange={this.handleTextChange}
                      handleSizeChange={this.handleSizeChange}
                      previewText={this.state.text}
                      textSize={this.state.size}
                    />
                  }
                  {this.props.widget.type === "PARAGRAPH" &&
                  <ParagraphWidget
                      widget={this.props.widget}
                      handleNameChange={this.handleNameChange}
                      handleTextChange={this.handleTextChange}
                      previewText={this.state.text}
                  />                  }
                  {this.props.widget.type === "LIST" &&
                  <ListWidget
                      widget={this.props.widget}
                      handleNameChange={this.handleNameChange}
                      handleTextChange={this.handleTextChange}
                      handleValueChange={this.handleValueChange}
                      previewText={this.state.text}
                      valueText={this.state.value}
                  />
                  }
                  {this.props.widget.type === "IMAGE" &&
                  <ImageWidget
                      widget={this.props.widget}
                      handleNameChange={this.handleNameChange}
                      handleSrcChange={this.handleSrcChange}
                      previewText={this.state.text}
                      srcText={this.state.src}
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

const stateToPropertyMapper = state => {
  return {
    widgets: state.widgets.widgets

  };
};

const dispatchToPropertyMapper = dispatch => {
  return {
  //   removeWidget: widgetID => {
  //     dispatch(widgetActions.deleteWidget(widgetID));
  //   }
   };
};

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(WidgetListItemComponent);
