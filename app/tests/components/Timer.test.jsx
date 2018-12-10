var React = require('react');
var ReactDOM = require('react-dom');
var TestUtil = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var Timer = require('Timer');

describe('Timer',()=>{
    it('should exist',()=>{
        expect(Timer).toExist();
    });

    it('should start the timer',(done)=>{
        //Render the timer
        var timer = TestUtil.renderIntoDocument(<Timer/>);
        //Start the timer
        timer.startTimer();
        //After 2 seconds, the count should be 2
        setTimeout(()=>{
            expect(timer.state.count).toBe(2);
            done();
        },2001);
    });
    describe('handleStatusChange',()=>{
        it('should start the timer when the status is started',(done)=>{
            //Render the timer
            var timer = TestUtil.renderIntoDocument(<Timer/>);
            //Set the status to started
            timer.handleStatusChange('started');
            //After two seconds, teh count shoukd be 2
            setTimeout(()=>{
                expect(timer.state.timerStatus).toBe('started');
                expect(timer.state.count).toBe(2);
                done();
            },2001);
        });


        it('should pause the timer when the status is paused',(done)=>{
            //Render the timer
            var timer = TestUtil.renderIntoDocument(<Timer/>);
            //Set the initial count to 10
            timer.setState({count:10});
            //Start the timer
            timer.handleStatusChange('started');
            //Pause the timer
            timer.handleStatusChange('paused');
            //After a second, the count should remain the same and the status should be paused
            setTimeout(()=>{
                expect(timer.state.timerStatus).toBe('paused');
                expect(timer.state.count).toBe(10);
                done();
            });
        });

        it('should stop the timer when the status is stopped',(done)=>{
            //Render the timer
            var timer = TestUtil.renderIntoDocument(<Timer/>);
            //Set Initial count to 10
            timer.setState({count:10});
            //Start the timer
            timer.handleStatusChange('started');
            //Stop the timer immediately
            timer.handleStatusChange('stopped');
            setTimeout(()=>{
                expect(timer.state.timerStatus).toBe('stopped');
                expect(timer.state.count).toBe(0);
                done();
            },1001);
        });
    });
});