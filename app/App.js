var React = require('react')
var Router = require('react-router')
var routers = require('./config/routers')

// <DefaultRouter handler= {Home} />
Router.run(routers, function(Root ){

	React.render(<Root />, document.getElementById('app'));
})

module.exports = app;