var React = require('react');

var Dropdown = React.createClass({
    getInitialState: function () {
        return {
            listVisible: false,
            elements: this.props.elements,       
            selected: this.props.selected
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
        return <div className={"dropdown-container" + (this.state.listVisible ? " show" : "")}>
            <div className={"dropdown-display" + (this.state.listVisible ? " clicked": "")} onClick={this.show}>
                <span>{this.state.selected.element}</span>
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
        console.log(this.state.elements);
        for (var i = 0; i < this.state.elements.length; i++) {
            var item = this.state.elements[i];
            items.push(<div onClick={this.select.bind(null, item)}>
                <span >{item.element}</span>
            </div>);
        }
        return items;
    }

});


module.exports = Dropdown;