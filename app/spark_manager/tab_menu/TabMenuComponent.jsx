var React = require('react');

var TabMenu = React.createClass({

    getInitialState: function () {
        return {
            menuTabs: [
                {
                    name: 'Category',
                    active: true,
                    id: 1
                },
                {
                    name: 'Triggers',
                    active: false,
                    id: 2
                }
            ]
        }
    },

    render: function () {
        return (
            <div>
                <div className="ui pointing menu">
                    <a className="active item">
                        Home
                    </a>
                    <a className="item">
                        Messages
                    </a>
                    <a className="item">
                        Friends
                    </a>

                </div>
                <div className="ui segment">
                    <p></p>
                </div>
            </div>
        )
    }
});

module.imports = TabMenu;