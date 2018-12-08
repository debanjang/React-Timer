var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtil = require('react-addons-test-utils');
var $ = require('jQuery');

var Controls = require('Controls');

describe('Controls',()=>{
    it('should exist',()=>{
        expect(Controls).toExist();
    });
    
    describe('render',()=>{
        it('should render Pause button when the countdown is started',()=>{
            var controls = TestUtil.renderIntoDocument(<Controls countdownStatus="started"/>);
            //$el = JqueryElement
            var $el = $(ReactDOM.findDOMNode(controls));
            //find selects all elements that match the selector.
            //The selector in this case is any button whose text contains the word Pause
            var $pauseButton = $el.find('button:contains(Pause)');
            //Assert that only one pause button in the DOM
            expect($pauseButton.length).toBe(1);
        });
    
        it('should render Start button when countdown is paused',()=>{
            var controls = TestUtil.renderIntoDocument(<Controls countdownStatus="paused"/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $startButton = $el.find('button:contains(Start)');
            expect($startButton.length).toBe(1);
        });
    });
});

