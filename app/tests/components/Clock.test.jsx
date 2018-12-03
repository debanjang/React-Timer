var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var Clock = require('Clock');

describe('Clock', () => {
    it('should exist',() => {
        expect(Clock).toExist();
    });
    
    describe('render', ()=>{
        it('should render clock to output', ()=>{
            var clock = TestUtils.renderIntoDocument(<Clock seconds={65}/>);
            var $el =  $(ReactDOM.findDOMNode(clock)); //get the root dom el of the component
            var actualText = $el.find('.clock-text').text(); 
            var expectedText = "01:05";
            expect(actualText).toBe(expectedText);
        });
    });

    describe('Format Seconds', () => {
        it('should format seconds',() => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 615;
            var actual = clock.formatSeconds(seconds);
            var expected = "10:15";
            expect(actual).toBe(expected);
        });

        it('should format mins/secs less than 10',() => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 65;
            var actual = clock.formatSeconds(seconds);
            var expected = "01:05";
            expect(actual).toBe(expected);
        });
    });
});

