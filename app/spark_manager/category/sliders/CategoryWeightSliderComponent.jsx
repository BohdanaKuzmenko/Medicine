var React = require('react');
var Slider = require('../../../../app/spark_manager/category/sliders/SliderComponent.jsx');
var HTTP = require('../../../../app/http/HTTP.jsx');
var Urls = require('../../../../app/urls/Urls.jsx');


var CategoryWeightSliderComponent = React.createClass({

    getInitialState: function () {
        return {
            categories: this.props.categoriesData,
            categoriesLimits: this.props.categoriesLimits
        }
    },

    componentDidUpdate: function () {
        if (this.props.categoriesData != this.state.categories){
            this.setState({
                categories: this.props.categoriesData,
                categoriesLimits: this.props.categoriesLimits
            });

        }
    },

    getTotalSlidersCount: function () {
        var totalSliderValue = 0;
        this.state.categories.forEach(function (item) {
            totalSliderValue += parseInt(item.current);
        });
        return totalSliderValue
    },

    updateMaxLimit: function (totalCount) {
        var maxLimit = 100 - totalCount;
        var limit_values = {};
        this.state.categories.forEach(function (item) {
            console.log(item)
            limit_values[item.name] = parseInt(item.current) + parseInt(maxLimit);
        });
        this.setState({
            categoriesLimits: limit_values
        })
    },

    updateCategory: function (config) {
        for (var i = 0; i < this.state.categories.length; i++) {
            if (this.state.categories[i].name == config.name) {
                this.state.categories[i].current = config.current;
                this.setState({
                    categories: this.state.categories
                });
            }
        }
        var totalSliderValue = this.getTotalSlidersCount();
        this.updateMaxLimit(totalSliderValue);
    },
    
    

    render: function () {
        var self = this;
        var categoriesList = this.state.categories;
        var namesList = categoriesList.map(function (category) {
            return (
                <div>
                    <h4>{category.name}</h4>
                    <Slider categoryConfig={category}
                            categoriesLimits={self.state.categoriesLimits}
                            changeFunc={(config) => self.updateCategory(config)}/>
                </div>);
        });
        return <ul>{ namesList }</ul>
    }
});

module.exports = CategoryWeightSliderComponent;

