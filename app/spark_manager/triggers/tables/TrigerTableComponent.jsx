var React = require('react');
var Modal = require('../../../../app/spark_manager/triggers/modal_windows/TriggerSettingsModalWindow.jsx');

var TriggerTableComponent = React.createClass({

    
    createModal: function (category) {
    },

    transferDescription: function (name, descriptions) {
        this.props.changeFunc(name, descriptions)
    },
    
    getTotalWeight: function(category){
        var total = 0;
        category.map(function (description) {
            total+=description.total;
        });
        return total;
    },

    render: function () {
        var triggersElements = [];
        var self = this;
        this.props.tableData.map(function (category) {
            var triggers = category.category.descriptions.map(
                function (trigger_info) {
                    return (
                        <tr>
                            <td></td>
                            <td></td>
                            <td>{trigger_info.description}</td>
                            <td>{trigger_info.total}</td>
                            <td>{trigger_info.lower_limit}</td>
                            <td>{trigger_info.upper_limit}</td>
                        </tr>
                    )
                }
            );

            triggersElements.push(<tr>
                <td>
                    <Modal categoryInformation={category.category}
                           changeFunc={(name,descriptions) => self.transferDescription(name,descriptions)}
                    />
                </td>
                <td>{category.category.name}</td>
                <td></td>
                <td>{self.getTotalWeight(category.category.descriptions)}</td>
                <td></td>
                <td></td>
            </tr>);

            triggers.forEach(function (trigger) {
                triggersElements.push(trigger);
            });

        });

        return (
            <div>
                <table className="ui table striped selectable celled">
                    <tbody>
                    <tr>
                        <th>Actions</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Trigger Weight %</th>
                        <th>Lower Limit</th>
                        <th>Upper Limit</th>
                    </tr>
                    {triggersElements}
                    </tbody>
                </table>
            </div>
        )
    }
});

module.exports = TriggerTableComponent;