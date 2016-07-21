var React = require('react');

var HTTP = require('../../app/http/HTTP.jsx');
var Urls = require('../../app/urls/Urls.jsx');
var Table = require('../../app/spark_manager/triggers/tables/TrigerTableComponent.jsx')
var TriggerWeightComponent = React.createClass({
    
    getInitialState : function () {
        return {
            triggerData: HTTP.GET(Urls.triggersData, false)['categories']
        }        
    },
    
    updateTriggerData: function(name,descriptions){
        var tmpTriggerData = this.state.triggerData;
        tmpTriggerData.map(function (category) {
            if(category.category.name == name){
                category.category.descriptions = descriptions
            }
        });
        this.setState({
            triggerData:tmpTriggerData
        })
        
    },
    
    
    render: function () {
       return(
           <div>
               <Table tableData={this.state.triggerData}
                      changeFunc={(name,descriptions) => this.updateTriggerData(name,descriptions)}
               />
           </div>
       )  
    }
});

module.exports = TriggerWeightComponent;