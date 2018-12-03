var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({

    render: function(){
        var seconds = 129;
        return(
            <div>
                <Clock seconds={seconds}/>
            </div>
        );
    }
});


module.exports = Countdown;