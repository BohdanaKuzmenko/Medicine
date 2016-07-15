var React = require('react');
var Menu = require('../app/Menu.jsx');
var MenuItem = require('../app/MenuItem.jsx');

var RiskProfileMenu = React.createClass({


    showLeft: function () {
        this.refs.left.show();
    },

    render: function () {
        return (
            <div>
                <Menu ref={"left"} alignment="left">
                    <MenuItem hash="ract">RACT</MenuItem>
                    <MenuItem hash="critical-data-variables">Critical Data Variables</MenuItem>
                    <MenuItem hash="spark-manages">Spark Manages</MenuItem>
                    <MenuItem hash="risk-plan">Risk Plan</MenuItem>
                    <MenuItem hash="subject-review-plan">Subject Review Plan</MenuItem>
                    <MenuItem hash="adaptive-monitoring-plan">Adaptive Monitoring Plan</MenuItem>

                </Menu>
            </div>
        )
    }
});

module.exports = RiskProfileMenu;