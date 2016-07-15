var React = require('react');
var ReactDOM = require('react-dom');
var MainMenu = require('../app/menu/MainMenu.jsx');
var DropDown = require('../app/basic_components/DropDownComponent.jsx');

var CategoryWeightComponent = require('../app/category_weight/CategoryWeightComponent.jsx')
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
                <dropdown>
                    <DropDown/>
                </dropdown>
                <div className="ui grid aligned">
                    <div className="row left aligned">
                        <div className="left aligned one wide floated column"></div>
                        <div className="left aligned twelve wide floated column">
                            <CategoryWeightComponent/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <App />, document.getElementById('app')
);

module.exports = App;


