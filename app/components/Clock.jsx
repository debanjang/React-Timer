var React = require('react');

var Clock = React.createClass({
    getDefaultProps: function(){
        seconds: 0
    },

    propTypes:{
        seconds: React.PropTypes.number
    },

    formatSeconds: function(totalSeconds){
        var seconds = totalSeconds%60;
        var minutes = Math.floor(totalSeconds/60);
        
        if(seconds<10){
            seconds = "0"+seconds;
        }

        if(minutes<10){
            minutes = "0"+minutes;
        }

        return minutes+":"+seconds;
    },
    
    render: function(){
        var  {seconds} = this.props;
        return(
            <div className= "clock">
                <span className= "clock-text">
                    {this.formatSeconds(seconds)}
                </span>
            </div>
        );
    }
});

module.exports = Clock;