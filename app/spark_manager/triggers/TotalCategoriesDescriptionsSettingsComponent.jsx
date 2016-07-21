var React = require('react');
var CategoryDescriptionSettings = require('../../../app/spark_manager/triggers/CategoryDescriptionSettingsComponent.jsx');

var TotalCategoriesDescriptionsSettingsComponent = React.createClass({

    getInitialState: function () {
        return {
            categoryDescriptions: this.props.categoryDescriptions,
            categoryLimits: this.getDescriptionsWeightsLimits(this.props.categoryDescriptions)

        }
    },

    getTotalWeight: function (descriptions) {
        var totalWeight = 0;
        descriptions.map(function (description) {
            totalWeight += description.total;
        })
        return totalWeight;
    },

    getDescriptionsWeightsLimits: function (descriptions) {
        var totalWeight = this.getTotalWeight(descriptions);
        var limits = {};
        descriptions.map(function (description) {
            limits[description.description] = 100 - totalWeight + description['total']
        })
        return limits;

    },

    updateCategoryDescriptions: function (updatedCategory) {
        var tmpCategoryDescriptions = this.state.categoryDescriptions;
        tmpCategoryDescriptions.map(function (description) {
            if (description.description == updatedCategory.description) {
                description.total = updatedCategory.total
            }
        })
        var descriptionsLimits = this.getDescriptionsWeightsLimits(tmpCategoryDescriptions);
        if (descriptionsLimits != this.state.categoryLimits ||
            tmpCategoryDescriptions != this.state.categoryDescriptions) {
            this.setState({
                categoryLimits: descriptionsLimits,
                categoryDescriptions: tmpCategoryDescriptions
            })
        }

    },

    transferDescriptionWeight: function (value) {
        this.updateCategoryDescriptions(value)
    },

    componentDidUpdate: function () {
        this.props.changeFunc(this.state.categoryDescriptions)
    },

    render: function () {
        var self = this;
        var descriptions = this.state.categoryDescriptions;
        var namesList = descriptions.map(function (description) {
            return <CategoryDescriptionSettings
                categoryDescription={description}
                categoryLimits={self.state.categoryLimits}
                changeFunc={(config) => self.transferDescriptionWeight(config)}
            />
        });
        return <div>{ namesList }</div>
    }
});
module.exports = TotalCategoriesDescriptionsSettingsComponent;