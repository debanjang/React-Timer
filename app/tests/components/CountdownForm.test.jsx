var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm',()=>{
    it('should exist',()=>{
        expect(CountdownForm).toExist();
    });

    it('should call onSetCountdown when called with valid arguments',()=>{
        var spy = expect.createSpy();
        //Since we want our unit tests to be isolated,
        //Spies are objects that can replace actual third party function calls in our components.
        //In CountdownForm, the onSetCountdown function is passed as a prop by the parent component
        //Instead of the actual function to be called(handleSetCountdown, in Countdown.jsx),
        //we pass a spy.
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        
        countdownForm.refs.seconds.value='169';
        //$el.find('form') gives us the jQuery dom node.
        //Since we need to pass the actual non jQuery Dom node to TestUtils.Simulate.submit,
        //we get it using: [0]
        TestUtils.Simulate.submit($el.find('form')[0]); 

        expect(spy).toHaveBeenCalledWith(169);
    });

    it('should not call onSetCountdown with invalid arguments', ()=>{
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);

        var $el = $(ReactDOM.findDOMNode(countdownForm));
        countdownForm.refs.seconds.value = 'adfs';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});