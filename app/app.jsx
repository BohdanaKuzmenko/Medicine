var React = require('react');
var ReactDOM = require('react-dom');
var MainMenu = require('../app/main_menu/MainMenu.jsx');
var TabMenu = require('../app/spark_manager/tabMenu.jsx');

var TriggerComponent = require('../app/spark_manager/TriggerWeightComponent.jsx');

var CategoryWeightComponent = require('../app/spark_manager/CategoryWeightComponent.jsx');
var App = React.createClass({

    showLeft: function () {
        this.refs.left.show();
    },

    render: function () {
        return (
            <div>
                <div className="header">
                    <MainMenu/>
                </div>
                <div>
                    <TabMenu/>
                </div>
                <div className="ui grid aligned">
                    <div className="row left aligned">
                        <div className="left aligned one wide floated column">
                        </div>
                        <div className="left aligned twelve wide floated column">
                            <CategoryWeightComponent/>
                        </div>
                    </div>
                    <div className="row left aligned">
                        <div className="left aligned one wide floated column">
                        </div>
                        <div className="left aligned twelve wide floated column">
                            <TriggerComponent/>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
});

ReactDOM.render(
    <App />, document.getElementById('app')
);

module.exports = App;

