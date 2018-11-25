var React = require('react');
var {Link, IndexLink} = require('react-router');

/* var Nav = React.createClass({
    render: function(){
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Timer App
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName="active-link"> Timer </IndexLink>
                        </li>
                        <li>
                            <Link to="/" activeClassName="active-link"> Countdown </Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Created by 
                            <a href="https://github.com/debanjang/" target="_blank">
                             Debanjan Ghosh 
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}); */

var Nav = () => {
    return(
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">
                        React Timer App
                    </li>
                    <li>
                        <IndexLink to="/" activeClassName="active-link"> Timer </IndexLink>
                    </li>
                    <li>
                        <Link to="/" activeClassName="active-link"> Countdown </Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created by 
                        <a href="https://github.com/debanjang/" target="_blank">
                            Debanjan Ghosh 
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

module.exports= Nav;