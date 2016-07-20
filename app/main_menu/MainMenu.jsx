var React = require('react');
var Menu = require('../../app/main_menu/Menu.jsx');
var MenuItem = require('../../app/main_menu/MenuItem.jsx');
var HTTP = require('../../app/http/HTTP.jsx');
var Urls = require('../../app/urls/Urls.jsx');
var MainMenu = React.createClass({

    menuLink: Urls.menu,

    getInitialState: function () {
        return ({
            menuItem: HTTP.GET(this.menuLink, false)['menu']
        })

    },
    
    
    createMenu: function (menuJson) {
        var self = this;
        var menuList = menuJson.map(function (mainMenuItem) {
            if (mainMenuItem.menu_item.submenu.length > 0) {
                return (
                    <li className="dropdown-submenu">
                        <a>
                            <MenuItem hash={mainMenuItem.menu_item.hash}>{mainMenuItem.menu_item.name}</MenuItem>
                        </a>
                        <ul className="dropdown-menu">
                            {self.createMenu(mainMenuItem.menu_item.submenu)}
                        </ul>
                    </li>)
            }
            else {
                return (
                    <li>
                        <a>
                            <MenuItem hash={mainMenuItem.menu_item.hash}>{mainMenuItem.menu_item.name}</MenuItem>
                        </a>
                    </li>
                )
            }
        });
        return menuList

    },

    getMenu: function () {
        var mainMenu = this.state.menuItem;
        var menuDom = this.createMenu(mainMenu)
        return (
            <div id="mn-wrapper">
                <div className="mn-sidebar">
                    <div className="mn-navblock">
                        <ul className="mn-vnavigation">{menuDom}</ul>
                    </div>
                </div>
            </div>
        )
    },

    showLeft: function () {

        this.refs.left.show();
    },

    render: function () {
        var menuStruct = this.getMenu();
        return (<div>
            <div>
                <button className="ui icon button menu-button" onClick={() => this.showLeft()}>
                    <i className="content icon" onClick={() => this.showLeft()}></i>
                </button>
            </div>
            <Menu ref={"left"} alignment="left">
                {menuStruct}
            </Menu>
        </div>)

    }
});

module.exports = MainMenu;


