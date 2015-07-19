var React = require('react');
var RouteHandler = require('react-router').RouteHandler

var Main = React.createClass({

	render: function() {
		console.log('RouteHandler=' , RouteHandler);
		return (
			<div className="main-container">
				<nav className="navbar navbar-default" role="navigation">
					<div className="col-sm-07 col-sm-offset-2" style={{marginTop: 15}}>
						MENU
					</div>
				</nav>
				<div className="container">
					<RouteHandler />
				</div>
			</div>
		);
	}

});

module.exports = Main;

// React.render(<Main />, document.getElementById('app'));