var React = require('react');

var Main = React.createClass({

	render: function() {
		return (
			<div>
   				Hello world
			</div>
		);
	}

});

module.exports = Main;

React.render(<Main />, document.getElementById('app'));