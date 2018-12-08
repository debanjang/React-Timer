var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtil = require('react-addons-test-utils');
var $ = require('jQuery');

var Countdown = require('Countdown');

describe('Countdown', ()=>{
    it('should exist',()=>{
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', ()=>{

        it('should change state to started and start countdown', (done)=>{
            var countdown = TestUtil.renderIntoDocument(<Countdown/>);
            //initially, countdownStatus should be stopped
            expect(countdown.state.countdownStatus).toBe('stopped');
            //call handleSetCountdown
            countdown.handleSetCountdown(10);
            //count should be equal to the arg passed in handleSetCountdown
            expect(countdown.state.count).toBe(10);
            //countdownStatus should change to started
            expect(countdown.state.countdownStatus).toBe('started');

            //after 1 second interval, the count should change to 9
            //time interval is set to 1001 second to give the component enough time
            //to re-render after state change
            setTimeout(()=>{
                expect(countdown.state.count).toBe(9);
                //support for asynchronous calls. 
                //Since Mocha by default does not support asynchronous function calls and will not
                //wait for the timeout interval,
                //we use done as an indicator. A ref to done is sent as an arg to the
                //it arrow function and by calling it we ensure that the test waits for completion
                //until we call done.
                done();
            }, 1001);
        });

        it('should not set count to negative', (done) =>{
            var countdown = TestUtil.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);
            setTimeout(()=>{
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001)
        });
    });
});