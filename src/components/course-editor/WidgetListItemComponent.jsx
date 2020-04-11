import React, { Component } from "react";
import widgetsService from "../../services/WidgetService";
import widgetActions from "../../actions/WidgetActions";
import { connect } from "react-redux";

class WidgetListItemComponent extends Component {

  state = {
    name: this.props.widget.name || "Unnamed Widget",
    isUpdated: false
  };

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {

  }

  // updateWidget = () => {
  //   this.setState({ changeToSave: 'UPDATE' })
  // }

  handleNameChange = newName => {
    this.setState({ name: newName });
    this.props.widget.name = newName;
    this.props.updateWidget(this.props.widget, this.state.isUpdated);
    this.setState({isUpdated: true})
  };

  handleOrderChange = (e, offset) => {
    e.stopPropagation();
    // this.props.widget.orderWidget = newName;
    this.setState({ orderWidget: this.props.widget.orderWidget ? this.props.widget.orderWidget + offset : offset});
}

  handleTypeChange = newType => {
    this.setState({ type: newType });
    this.props.widget.type = newType;
    this.props.updateWidget(this.props.widget, this.state.isUpdated);
    this.setState({isUpdated: true})
  };

  render() {
    return (
      <>
        <div className="row mb-3">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <h2>{this.state.name || "Unnamed Widget"}</h2>
                  </div>
                  <div className="col-6 d-flex justify-content-end align-items-stretch">

                    <button className="btn btn-warning mr-1" onClick={(e) => this.handleOrderChange(e, -1)} >
                      <i className="fa fa-arrow-up"></i>
                    </button>
                    <button className="btn btn-warning mr-1" onClick={(e) => this.handleOrderChange(e, 1)} >
                      <i className="fa fa-arrow-down"></i>
                    </button>
                    <select className="widget-type-select mr-1" onChange={(e) => this.handleTypeChange(e.target.value)} defaultValue={this.props.widget.type || "HEADING"}>
                      <option value="HEADING">Heading Widget</option>
                      <option value="PARAGRAPH">Paragraph Widget</option>
                      <option value="LIST">List Widget</option>
                      <option value="IMAGE">Image Widget</option>

                    </select>
                    <input type="text" onChange={(e) => this.handleNameChange(e.target.value)} placeholder={this.props.widget.name || "Widget name"} />
                    <button className="btn btn-danger">
                      <i className="fa fa-trash" onClick={this.props.removeWidget}></i>
                    </button>
                  </div>
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
