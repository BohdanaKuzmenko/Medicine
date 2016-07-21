var React = require('react');
var InputRange = require('react-input-range');

var Slider = React.createClass({

    getInitialState: function () {
        return {
            categoryConfig: this.props.categoryConfig,
            categoriesLimits: this.props.categoriesLimits
        };
    },

    componentDidUpdate:function () {
        if(this.props.categoryConfig != this.state.categoryConfig||
            this.props.categoriesLimits != this.state.categoriesLimits){
            this.setState({
                categoryConfig: this.props.categoryConfig,
                categoriesLimits: this.props.categoriesLimits
            })
        }
    },

    handleChange: function (component, value){
        var categoryConfig = this.state.categoryConfig;
        var categoryLimit = this.state.categoriesLimits[categoryConfig.name];
        categoryConfig.current = (value >= categoryLimit) ? categoryLimit : value;
        this.setState({
            categoryConfig: categoryConfig,
        });
        this.props.changeFunc(this.state.categoryConfig);
    },

    render: function () {
        return (
            <div>
                <p> Weight % (value: {this.state.categoryConfig.current})</p>

                <InputRange
                    minValue={0}
                    maxValue={100}
                    value={this.state.categoryConfig.current}
                    onChange={this.handleChange}
                />
            </div>

        );
    }

});

module.exports = Slider;