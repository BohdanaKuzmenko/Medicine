var React = require('react');
var InputRange = require('react-input-range');

var MultiValuedSlider = React.createClass({

    getInitialState: function () {
        return {
            values: {
                min: this.props.categoryDescription.lower_limit,
                max: this.props.categoryDescription.upper_limit
            }
        }
    },

    componentDidUpdate: function () {
        var description = this.props.categoryDescription;
        console.log(description);
        if (description.lower_limit != this.state.values.min ||
        description.upper_limit != this.state.values.max){
            description.lower_limit = this.state.values.min;
            description.upper_limit = this.state.values.max;
            console.log('Sliders singlevalued');
            console.log(description);
            this.props.changeTresholdFunc(description)
        }
        
    },

    handleValuesChange: function (component, values) {
        this.setState({
            values: values,
        });
        console.log(values)
        
    },

    render: function () {
        return (
            <div>
                <p>Threshold limit (in %) 
                    <span style={{ color: '#008141'}}>
                        [Lower: {this.state.values.min}
                        </span>
                    :
                    <span style={{ color: '#C56557'}}>
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