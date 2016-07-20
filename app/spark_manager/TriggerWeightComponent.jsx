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
    
    render: function () {
       return(
           <div>
               <Table tableData={this.state.triggerData}/>
           </div>
       )  
    }
});

module.exports = TriggerWeightComponent;