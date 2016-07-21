var React = require('react');
var HTTP = require('../../app/http/HTTP.jsx');
var Urls = require('../../app/urls/Urls.jsx');
var CategoryWeightComponent = require('../../app/spark_manager/CategoryWeightComponent.jsx');
var TriggerComponent = require('../../app/spark_manager/TriggerWeightComponent.jsx');
var DropDown = require('../../app/basic_components/DropDownComponent.jsx');

var Test = React.createClass({

    getInitialState: function () {
        return {
            ids: HTTP.GET(Urls.ids, false)['elements'],
            menuTabs: [
                {
                    name: 'Category',
                    active: true,
                    id: 1,
                    content: <CategoryWeightComponent/>
                },
                {
                    name: 'Triggers',
                    active: false,
                    id: 2,
                    content: <TriggerComponent/>
                }
            ]
        }
    },

    updateTabs: function (seletedTabId) {
        var tmpMenuTabs = this.state.menuTabs;
        tmpMenuTabs.map(function (tab) {
            tab.active = (tab.id == seletedTabId);
        })
        this.setState({
            menuTabs: tmpMenuTabs
        })
    },

    render: function () {
        var self = this
        var tabs = this.state.menuTabs.map(function (menuTab) {
            return menuTab.active ?
                (<a className="active item" onClick={self.updateTabs.bind(null,menuTab.id)}>
                    {menuTab.name}
                </a>) :
                (<a className="item" onClick={self.updateTabs.bind(null,menuTab.id)}>
                    {menuTab.name}
                </a>)

        });
        var content = this.state.menuTabs.map(function (menuTab) {
            if (menuTab.active) {
                return menuTab.content
            }
        });
        return (
            <div>
                <div className="ui tabular menu">
                    {tabs}

                </div>
                <div ui row>
                    <div className="ui four wide column segment">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Test;