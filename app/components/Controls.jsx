var React = require('react');

var Controls = React.createClass({
    propTypes:{
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },

    onStatusChange: function(newStatus){
        //returning a function from a function-> Currying pattern
        return ()=>{
            this.props.onStatusChange(newStatus);
        }
    },

    render: function(){
        var{countdownStatus} = this.props;
        var that = this;
        function renderAppropriateButton(){
            if(countdownStatus === 'started'){
                return (<button className="button secondary" onClick={that.onStatusChange('paused')}>Pause</button>);
            }else if(countdownStatus === 'paused'){
                return (<button className="button primary" onClick={that.onStatusChange('started')}>Start</button>);
            }
        }
        
        return(
            <div className="controls">
                {renderAppropriateButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        );
    }
});

module.exports = Controls;