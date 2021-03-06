var React = require('react');
var MultiValuedSlider = require('../../../app/spark_manager/triggers/sliders/MultiValuedSlider.jsx');
var SingleValuedSlider = require('../../../app/spark_manager/triggers/sliders/SingleValuedSlider.jsx');

var CategoryDescriptionSettingsComponent = React.createClass({
    getInitialState: function () {
        return {
            categoryDescription: this.props.categoryDescription,
            categoryLimits:this.props.categoryLimits
        }

    },
    componentDidUpdate:function () {
      if (this.state.categoryDescription!= this.props.categoryDescription ||
          this.state.categoryLimits!=this.props.categoryLimits){
          this.setState({
                  categoryDescription: this.props.categoryDescription,
                  categoryLimits:this.props.categoryLimits
          })
      }
    },

    transferDescription: function (value) {
        this.props.changeFunc(value)
    },

    render: function () {
        return (
            <div>
                <div className="ui grid center aligned">
                    <div className="row">
                        <div className="center floated column">
                            <h4>{this.state.categoryDescription.description}</h4>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="left eight wide floated column">
                            <SingleValuedSlider categoryDescription={this.state.categoryDescription}
                                                categoryLimits={this.state.categoryLimits}
                                                changeDescriptionsWeightFunc={(config) => this.transferDescription(config)}/>
                        </div>
                        <div className="left eight wide floated column">
                            <MultiValuedSlider categoryDescription={this.state.categoryDescription}
                                               changeTresholdFunc={(config) => this.transferDescription(config)}
                            />
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        )

    }
});

module.exports = CategoryDescriptionSettingsComponent;
