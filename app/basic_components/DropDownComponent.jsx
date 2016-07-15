var React = require('react');

var Dropdown = React.createClass({
    getInitialState: function () {
        return {
            listVisible: false,
            ids: [{id: "0001"},
                {id: "0002"},
                {id: "0003"},
                {id: "0004"},
                {id: "0005"}],
            selected: {id: "0001"}
        };
    },

    select: function (item) {
        this.state.selected = item;
    },

    show: function () {
        this.setState({listVisible: true});
        document.addEventListener("click", this.hide);
    },

    hide: function () {
        this.setState({listVisible: false});
        document.removeEventListener("click", this.hide);
    },

    render: function () {
        console.log(this.state.selected)
        return <div className={"dropdown-container" + (this.state.listVisible ? " show" : "")}>
            <div className={"dropdown-display" + (this.state.listVisible ? " clicked": "")} onClick={this.show}>
                <span>{this.state.selected.id}</span>
                <i className="fa fa-angle-down"></i>
            </div>
            <div className="dropdown-list">
                <div>
                    {this.renderListItems()}
                </div>
            </div>
        </div>;
    },

    renderListItems: function () {
        var items = [];
        for (var i = 0; i < this.state.ids.length; i++) {
            var item = this.state.ids[i];
            items.push(<div onClick={this.select.bind(null, item)}>
                <span >{item.id}</span>
            </div>);
        }
        return items;
    }

});


module.exports = Dropdown;