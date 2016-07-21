var React = require('react');
var TotalCategoriesDescriptionsSettings = require('../../../../app/spark_manager/triggers/TotalCategoriesDescriptionsSettingsComponent.jsx');

var TriggerSettingsModalWindowComponent = React.createClass({

    getInitialState: function () {
        return {
            name: this.props.categoryInformation.name,
            description: this.props.categoryInformation.descriptions
        }
    },


    updateDescription: function (data) {
        console.log("*TriggerSettingsModalWindow::transferData");
        console.log(data);
        console.log(this.state.description);
        if (data != this.state.description) {
            this.setState({
                description: data
            })
        }

    },

    handleClick: function () {
        this.props.changeFunc(this.state.name, this.state.description)
    },

    render: function () {
        var modalName = "#trigger-settings" + this.state.name.replace(' ', '_');
        var tmp = "trigger-settings" + this.state.name.replace(' ', '_');
        return <div className="edit-trigger">

            <button className="ui icon button edit-trigger-button" data-toggle="modal" data-target={modalName}>
                <i className="write icon"></i>
            </button>

            <div className="modal fade" id={tmp} tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span
                                aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="myModalLabel">Update Triggers Weight,
                                %: {this.state.name}  </h4>
                        </div>
                        <div className="modal-body">
                            <TotalCategoriesDescriptionsSettings
                                categoryDescriptions={this.state.description}
                                changeFunc={(config) => this.updateDescription(config)}
                            />
                        </div>
                        <div className="modal-footer">

                            <button className="ui icon button save-button" onClick={this.handleClick}
                                    data-toggle="modal" data-target={modalName}>
                                <i className="save icon"> Save</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
});

module.exports = TriggerSettingsModalWindowComponent;