var React = require('react');

var CategoryWeightSliderComponent = require('../../app/sliders/CategoryWeightSliderComponent.jsx');

var CategoryWeightModalWindowComponent = React.createClass({

    getInitialState: function () {
        return {
            categoriesData: this.props.categoriesData,
            categoriesLimits: this.props.categoriesLimits
        }
    },
    
    componentDidUpdate: function () {
        if (this.props.categoriesData != this.state.categoriesData||
            this.props.categoriesLimits != this.state.categoriesLimits) {
            this.setState({
                categoriesData: this.props.categoriesData,
                categoriesLimits: this.props.categoriesLimits
            });
        }
    },

    render: function () {
        return <div>

            <button className="ui icon button edit-button"  data-toggle="modal" data-target="#myModal">
                <i className="edit icon">Edit Categories</i>
            </button>

            <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="myModalLabel">Category Weight Settings</h4>
                        </div>
                        <div className="modal-body">
                            <CategoryWeightSliderComponent categoriesData={this.state.categoriesData}
                            categoriesLimits={this.state.categoriesLimits}/>
                        </div>
                        <div className="modal-footer">
                            <button className="ui icon button save-button"  data-toggle="modal" data-target="#myModal">
                                <i className="save icon">  Save</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
});


module.exports = CategoryWeightModalWindowComponent;