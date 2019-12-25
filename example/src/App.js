//Core
import React, { Component } from '../../node_modules/react';

//Router
import { Router, Route, Switch, Link } from '../../';

export default class App extends Component {
	render() {
		return (
			<Router>
				<h1>React Complete Router</h1>

				<Link to="/">To home</Link>
				<Link to="/help">To help</Link>

				<Switch>
					<Route path="/help" to={<h1>Help</h1>} />
					<Route path="/" to={<h1>Home</h1>} />
				</Switch>
			</Router>
		)
	}
}