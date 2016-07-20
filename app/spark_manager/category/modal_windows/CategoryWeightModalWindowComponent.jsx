var React = require('react');

var CategoryWeightSliderComponent = require('../../../../app/spark_manager/category/sliders/CategoryWeightSliderComponent.jsx');

var CategoryWeightModalWindowComponent = React.createClass({

    getInitialState: function () {
        return {
            categoriesData: this.props.categoriesData,
            categoriesLimits: this.getInitialCategoryMax(this.props.categoriesData)
        }
    },

    getInitialCategoryMax: function (fullCategoryData) {
        var total_count = this.getInitialTotalWeight(fullCategoryData);
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
            categoriesData: fullCategoryData,
            categoriesLimits: categoriesLimits
        })
    },

    getCategoryMax: function (fullCategoryData) {
        var total_count = this.getTotalSlidersCount(fullCategoryData);
        var categoriesLimits = {};
        fullCategoryData.forEach(function (item) {
            categoriesLimits[item.name] = 100 - total_count + item['current'];
        });
        return categoriesLimits
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
        this.state.categoriesData.forEach(function (item) {
            totalSliderValue += parseInt(item.current);
        });
        return totalSliderValue
    },

    componentDidUpdate: function () {
        if (this.props.categoriesData != this.state.categoriesData) {
            this.setState({
                categoriesData: this.props.categoriesData
            });
        }
        var currentTotalCategoriesWeight = this.getTotalSlidersCount();
        if (currentTotalCategoriesWeight != this.state.totalWeight) {
            this.setState({
                categoriesLimits: this.getCategoryMax(this.state.categoriesData),
                totalWeight: currentTotalCategoriesWeight
            });
        }
    },

    render: function () {
        return <div>

            <button className="ui icon button edit-button" data-toggle="modal" data-target="#myModal">
                <i className="edit icon">Edit Categories</i>
            </button>

            <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span
                                aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="myModalLabel">Category Weight Settings</h4>
                        </div>
                        <div className="modal-body">
                            <CategoryWeightSliderComponent categoriesData={this.state.categoriesData}
                                                           categoriesLimits={this.state.categoriesLimits}/>
                        </div>
                        <div className="modal-footer">
                            <button className="ui icon button save-button" data-toggle="modal" data-target="#myModal">
                                <i className="save icon"> Save</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
});

module.exports = CategoryWeightModalWindowComponent;