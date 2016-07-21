var React = require('react');
var InputRange = require('react-input-range');

var SingleValuedSlider = React.createClass({

    getInitialState: function () {
        return {
            categoryDescriptionConfig: this.props.categoryDescription,
            categoryLimits: this.props.categoryLimits
        }
    },

    componentDidUpdate: function(){
        if (this.state.categoryDescriptionConfig!= this.props.categoryDescription ||
            this.state.categoryLimits!=this.props.categoryLimits){
            this.setState({
                categoryDescriptionConfig: this.props.categoryDescription,
                categoryLimits:this.props.categoryLimits
            })
        }
    },
    
    handleValuesChange: function (component, value) {
        console.log("__________________");
        console.log("*SingleValuedSlider::handleValuesChange");
        console.log(value)
        var description = this.state.categoryDescriptionConfig;
        var limitValue = this.state.categoryLimits[description.description];
        description.total = (value < limitValue) ? value : limitValue;
        this.setState({
            categoryDescriptionConfig: description
        })
        this.props.changeDescriptionsWeightFunc(this.state.categoryDescriptionConfig)
    },
    

    render: function () {
        return (
            <div>
                <p>Trigger Weight, % [value: {this.state.categoryDescriptionConfig.total}]</p>
                <form className="form">
                    <div className="formField">
                        <InputRange
                            minValue={0}
                            maxValue={100}
                            value={this.state.categoryDescriptionConfig.total}
                            onChange={this.handleValuesChange}
                        />
                    </div>
                </form>
            </div>

        )
    }

});

module.exports = SingleValuedSlider;

