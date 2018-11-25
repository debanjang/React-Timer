var React = require('react');
var Nav = require('Navigation');
// var Main = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <Nav/>
//         <h2>Main Component</h2>
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props) =>{
  return(
    <div>
      <Nav/>
      <p>Main.jsx rendered</p>
      {props.children}
      </div>
  )
}

module.exports = Main;
