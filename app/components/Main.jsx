var React = require('react');
var Navigation = require('Navigation');
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

var Main = props =>{
  return(
    <div>
      <Navigation/>
      <div className="row" >
        {/* On a medium screen take up 6 columns, on a large screen take up 4 columns and on a small screen take up all 12*/}
        {/* Center the column using small centered. Foundation is mobile first, so using small automatically scales up to bigger screens*/}
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  )
}

module.exports = Main;