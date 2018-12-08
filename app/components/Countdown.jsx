var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({

    /* 
    ** componentDidUpdate is called when either it's own state or the props passed from the parent
    ** change. This is not called during initial render. This is called just after
    ** componentDidMount
    */
    componentDidUpdate: function(prevProps, prevState){
        /* 
        ** This check is required. First is that we only want to start the timer
        ** when the countdownStatus changes and not when anything else does.
        ** Second and the most important is that this method calls shouldComponentUpdate internally
        ** which defaults to true.  As such, we get into an infinite loop as everytime we change
        ** the state in startTimer, shouldComponentUpdate is called which triggers a background 
        ** re-render that seriously hampers the performance
        */
        if(this.state.countdownStatus != prevState.countdownStatus){
            switch(this.state.countdownStatus){
                case 'started':
                    this.startTimer();
                    break;
            }
        }
    },

    startTimer: function(){
        this.timer = setInterval(()=>{
            var newCount = this.state.count-1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
        },1000);
    },
    
    getInitialState: function(){
        return {
            count: 0,
            countdownStatus: 'stopped'
        } 
    },

    handleSetCountdown: function(seconds){
        this.setState({
            count:seconds,
            countdownStatus: 'started'
        });
    },

    render: function(){
        var {count} = this.state;
        return(
            <div>
                <Clock totalSeconds={count}/>
                <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            </div>
        );
    }
});


module.exports = Countdown;