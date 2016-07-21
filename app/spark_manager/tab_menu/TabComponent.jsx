var React = require('react');

var Tab = React.createClass({
    getInitialStata: function () {
        return {
            name: this.props.tabConfig.name,
            id: this.props.tabConfig.id,
            active: this.props.tabConfig.active

        }
    },

    render: function () {
        return(
           <> </>
        )
    }
});