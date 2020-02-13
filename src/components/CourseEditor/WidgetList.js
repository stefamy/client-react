import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/PararagraphWidget";
import {findAllWidgets, createWidget, deleteWidget} from "../../services/WidgetService";

class WidgetList extends React.Component {
    componentDidMount() {
        this.props.findAllWidgets();
    }

    render(){
        return(
            <ul>
                {
                    this.props.widgets && this.props.widgets.map(widget =>
                        <li key={widget.id}>
                            {widget.type === "HEADING" && <HeadingWidget widget={widget}/>}
                            {widget.type === "PARAGRAPH" && <ParagraphWidget widget={widget}/>}
                            <button onClick={() => this.props.deleteWidget(widget.id)}>
                                Delete
                            </button>
                        </li>
                    )
                }
                <li>
                    <button onClick={this.props.createWidget}>
                        Create Widget
                    </button>
                </li>
            </ul>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets
})

const dispatchToPropertyMapper = (dispatcher) => ({
    deleteWidget: (widgetId) =>
        deleteWidget(widgetId)
            .then(status => dispatcher({
                type: 'DELETE',
                widgetId: widgetId
            })),
    createWidget: () =>
        createWidget({
            title: "New Widget",
            type: "HEADING",
            id: (new Date()).getTime() + ""
        })
            .then(actualWidget => dispatcher({
                type: "ADD_WIDGET",
                widget: actualWidget
            })),
    findAllWidgets: () =>
        findAllWidgets()
            .then(actualWidgets => dispatcher({
                type: "FIND_ALL_WIDGETS",
                widgets: actualWidgets
            }))
})

export default connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(WidgetList)
