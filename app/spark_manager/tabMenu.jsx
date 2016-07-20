var React = require('react');
var DropDown = require('../../app/basic_components/DropDownComponent.jsx');
var HTTP = require('../../app/http/HTTP.jsx');
var Urls = require('../../app/urls/Urls.jsx');

var Test = React.createClass({
    getInitialState: function () {
        return {
            ids: HTTP.GET(Urls.ids, false)['elements'],
            options: HTTP.GET(Urls.sparkManagerOptions, false)['elements']
        }
    },

    render: function () {
        console.log(this.state.ids);
        console.log(this.state.ids[0]);
        console.log("----------");
        return (
            <div className="ui menu">
                <a className="item">
                    <dropdown>
                        <DropDown elements={this.state.ids} selected={this.state.ids[0]}/>
                    </dropdown>
                </a>
                <a className="item">
                    <dropdown>
                        <DropDown elements={this.state.options} selected={this.state.options[0]}/>
                    </dropdown>
                </a>
            </div>
        )
    }
});

module.exports = Test;