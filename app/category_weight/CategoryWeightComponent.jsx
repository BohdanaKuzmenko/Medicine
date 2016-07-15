var React = require('react');
var CategoryWeightTable = require('../../app/tables/CategoryWeightTableComponent.jsx');
var CategoryWeightSettingsModal = require('../../app/modal_windows/CategoryWeightModalWindowComponent.jsx');
var HTTP = require('../../app/http/HTTP.jsx');
var Urls = require('../../app/urls/Urls.jsx');

var CategoryWeightComponent = React.createClass({

    categoryWeightUrl: Urls.categoriesWeightUrl,

    getInitialState: function () {
        return {
            categories: HTTP.GET(this.categoryWeightUrl, false)['categories'],
            categoriesLimits: this.getInitialCategoryMax(HTTP.GET(this.categoryWeightUrl, false)['categories'])
        };
    },

    getInitialCategoryMax: function (fullCategoryData) {
        var total_count = this.getInitialTotalWeight(fullCategoryData);
        var categoriesLimits = {};
        fullCategoryData.forEach(function (item) {
            categoriesLimits[item.name] = 100 - total_count + item['current'];
        });
        return categoriesLimits
    },

    getCategoryMax: function (fullCategoryData) {
        var total_count = this.getTotalSlidersCount(fullCategoryData);
        var categoriesLimits = {};
        fullCategoryData.forEach(function (item) {
            categoriesLimits[item.name] = 100 - total_count + item['current'];
        });
        return categoriesLimits
    },

    setCategoryMax: function (fullCategoryData) {
        var total_count = this.getTotalSlidersCount(fullCategoryData);
        var categoriesLimits = {};
        fullCategoryData.forEach(function (item) {
            categoriesLimits[item.name] = 100 - total_count + item['current'];
        });
        this.setState({
            categories: fullCategoryData,
            categoriesLimits: categoriesLimits
        })
    },

    getInitialTotalWeight: function (fullCategoryData) {
        var totalWeightValue = 0;
        fullCategoryData.forEach(function (item) {
            totalWeightValue += parseInt(item.current);
        });
        this.setState({
            totalWeight: totalWeightValue
        });
        return totalWeightValue
    },

    getTotalSlidersCount: function () {
        var totalSliderValue = 0;
        this.state.categories.forEach(function (item) {
            totalSliderValue += parseInt(item.current);
        });
        return totalSliderValue
    },

    componentDidUpdate: function () {
        var currentTotalCategoriesWeight = this.getTotalSlidersCount();
        if (currentTotalCategoriesWeight != this.state.totalWeight) {
            this.setState({
                categoriesLimits: this.getCategoryMax(this.state.categories),
                totalWeight: currentTotalCategoriesWeight
            });
        }
    },

    updateCategories: function (changedCategories) {
        this.setCategoryMax(changedCategories)

    },

    render: function () {

        return (
            <div>
                <div className="modal-body">
                    <CategoryWeightSettingsModal
                        categoriesData={this.state.categories}
                        categoriesLimits={this.state.categoriesLimits}
                    />
                    <CategoryWeightTable
                        categoriesData={this.state.categories}
                        changeFunc={(changedCategories) => this.updateCategories(changedCategories)}
                    />
                </div>
            </div>
        )
    }
});

module.exports = CategoryWeightComponent;

