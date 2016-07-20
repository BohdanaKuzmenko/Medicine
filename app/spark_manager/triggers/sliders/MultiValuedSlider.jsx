var React = require('react');
var InputRange = require('react-input-range');

var MultiValuedSlider = React.createClass({

    getInitialState: function () {
        return {
            values: {
                min: this.props.lower_limit,
                max: this.props.upper_limit
            }
        }
    },

    handleValuesChange: function (component, values) {
        this.setState({
            values: values,
        });
    },

    render: function () {
        return (
            <div>
                <p>Threshold limit (in %) 
                    <span style={{ color: 'green'}}>
                        [Lower: {this.state.values.min}
                        </span>
                    :
                    <span style={{ color: 'red'}}>
                        Upper: {this.state.values.max}]
                        </span>

                </p>
                <form className="form">
                    <div className="formField">
                        <InputRange
                            minValue={0}
                            maxValue={100}
                            value={this.state.values}
                            onChange={this.handleValuesChange}
                        />
                    </div>
                </form>
            </div>
        )
    }

});

module.exports = MultiValuedSlider;