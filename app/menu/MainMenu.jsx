var React = require('react');
var Menu = require('../../app/menu/Menu.jsx');
var MenuItem = require('../../app/menu/MenuItem.jsx');

var MainMenu = React.createClass({

    showLeft: function () {
        this.refs.left.show();
    },

    render: function () {
        return (
            <div>
                <button className="ui icon button menu-button" onClick={() => this.showLeft()}>
                    <i className="content icon" onClick={() => this.showLeft()}></i>
                </button>
                <Menu ref={"left"} alignment="left">
                    <MenuItem hash="home">Home</MenuItem>
                    <MenuItem hash="administration">App Administration</MenuItem>
                    <MenuItem hash="risk">Risk Profile</MenuItem>
                    <MenuItem hash="central-data">Central Data Review</MenuItem>
                    <MenuItem hash="dashboards">Dashboards</MenuItem>
                    <MenuItem hash="actions">Action Tracker</MenuItem>
                    <MenuItem hash="payments">Site Investigator Payments</MenuItem>
                </Menu>
            </div>
        )
    }
});

module.exports = MainMenu;