var React = require('react');
var CategoryWeightTable = require('../../app/spark_manager/category/tables/CategoryWeightTableComponent.jsx');
var CategoryWeightSettingsModal = require('../../app/spark_manager/category/modal_windows/CategoryWeightModalWindowComponent.jsx');
var HTTP = require('../../app/http/HTTP.jsx');
var Urls = require('../../app/urls/Urls.jsx');

var CategoryWeightComponent = React.createClass({

    categoryWeightUrl: Urls.categoriesWeightUrl,

    getInitialState: function () {
        return {
            categories: HTTP.GET(this.categoryWeightUrl, false)['categories'],
        };
    },
    
    updateCategories: function (changedCategories) {
        if (this.state.categories != changedCategories) {
            this.setState({
                categories: changedCategories,
            })
        }
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

