var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({

    
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

    handleStatusChange: function(status){
        this.setState({
            countdownStatus: status
        });
    },

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
        ** the state in startTimer, shouldComponentUpdate is called which triggers calls to
        ** componentWillUpdate, render and then componentDidUpdate again.
        */
        if(this.state.countdownStatus != prevState.countdownStatus){
            switch(this.state.countdownStatus){
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count:0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
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
            if(newCount===0){
                this.setState({
                    countdownStatus: 'stopped'
                });
            }
        },1000);
    },

    /**
     ** This gets called just before a component is unmounted from the DOM and destroyed.
     ** We can use this method to cancel any side effects like
     ** subscriptions, network calls and invalidate timers like the one we have created. 
     **/  
    componentWillUnmount: function(){
        clearInterval(this.timer);
        this.timer = undefined;
    },

    render: function(){
        var {count, countdownStatus} = this.state;

        var renderControlArea = ()=>{
            if(countdownStatus!== 'stopped'){
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
            }else{
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
            }
        }
        return(
            <div>
                <h2 className="page-title">Countdown App</h2>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        );
    }
});


module.exports = Countdown;