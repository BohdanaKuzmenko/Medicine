var React = require('react')

var ReactBSTable = require('react-bootstrap-table');
var BootstrapTable = ReactBSTable.BootstrapTable;
var TableHeaderColumn = ReactBSTable.TableHeaderColumn;
var HTTP = require('../../../../app/http/HTTP.jsx');
var Urls = require('../../../../app/urls/Urls.jsx');

var CategoryWeightTableComponent = React.createClass({

    getInitialState: function () {
        return {
            categories: this.props.categoriesData,
            cellEditProp: {mode: "click", blurToSave: true},
            selectRowProp: {mode: "checkbox", clickToSelect: true, onSelect: this.onRowSelect, bgColor: "#C56557"},

        };
    },

    onRowSelect: function (row, isSelected) {
        console.log(row);
        console.log("selected: " + isSelected)
    },

    addNewData: function (newObj) {
        var tmpObj = this.state.categories;
        newObj.current = 0;
        tmpObj.push(newObj);
        this.setState({
            categories: tmpObj
        })
        this.props.changeFunc(this.state.categories)
    },

    ifContains: function (all_data, value) {
        for (var i = 0; i < all_data.length; i++)
            if (all_data[i] == value) {
                return true;
            }
        return false;
    },

    deleteKeys: function (categoriesToDelete) {
        var newCategoriesList = [];
        var self = this;

        this.state.categories.forEach(function (category) {
                if (!self.ifContains(categoriesToDelete, category.name)) {
                    newCategoriesList.push(category)
                }
            }
        );

        this.setState({
            categories: newCategoriesList
        });
        this.props.changeFunc(newCategoriesList)
    },

    render: function () {
        return (
            <div>
                <BootstrapTable ref="table" data={this.state.categories}
                                insertRow={true}
                                deleteRow={true}
                                selectRow={this.state.selectRowProp}
                                dataSort={true}
                                striped={true}
                                hover={true}
                                cellEdit={this.state.cellEditProp}
                                addNewObj={(newObj)  => this.addNewData(newObj)}
                                deleteObjects={(keys) => this.deleteKeys(keys)}>
                    <TableHeaderColumn dataField="name" dataSort={true} isKey={true}>
                        Category
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="current" dataSort={true} dataAlign="center" width="170"
                                       editable={false}>
                        Category Weight, %
                    </TableHeaderColumn>
                </BootstrapTable>
            </div>
        )

    }
});

module.exports = CategoryWeightTableComponent;