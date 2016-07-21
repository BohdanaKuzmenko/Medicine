var React = require('react');
var ReactDOM = require('react-dom');
var MainMenu = require('../app/main_menu/MainMenu.jsx');
var TabMenu = require('../app/spark_manager/tabMenu.jsx');

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
                <div ui grid>
                    <TabMenu/>
                </div>
            </div >
        )
    }
});

ReactDOM.render(
    <App />, document.getElementById('app')
);

module.exports = App;

