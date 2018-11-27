var React = require('react'); //Since these are explicitly
                          //loaded dependencies in package.json, we dont need to include the full path
var {Router, Route, IndexRoute, hashHistory} = require('react-router');
var ReactDOM = require('react-dom');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

//Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
//Fire up foundation
$('document').foundation();

//Load custom styles
require('style!css!sass!applicationStyles');

// RaectDOM.render is the starting point of the application. render to the app container
ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Timer}/>
        <Route path="countdown" component={Countdown}/>
      </Route>
    </Router>,
    document.getElementById('app')
);

//Experiment with spread operator
// var objOne= {
//   name: 'Debanjan',
//   location: 'Bangalore'
// };
//
// var objTwo= {
//   age: '30',
//   ...objOne
// };
//
// console.log(objTwo);
