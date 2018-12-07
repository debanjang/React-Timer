var React = require('react');

var CountdownForm = React.createClass({
    
    onSubmit: function(e){
        e.preventDefault();
        var secondStr = this.refs.seconds.value;
        var seconds = parseInt(secondStr, 10);
        if(secondStr.match(/^[0-9]*$/)){
            this.refs.seconds.value='';
            this.props.onSetCountdown(seconds);
        }

    },
    
    render: function(){
        return(
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter Time in Seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
});

module.exports = CountdownForm;