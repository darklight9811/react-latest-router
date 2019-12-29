//Core
import React from '../../node_modules/react';

//Router
import { Router, Route, Switch, Link } from '../../';

//Views
import View from './View';

export default function App () {
	return (
		<Router>
			<h1>React Complete Router</h1>

			<Link link="/" 		active className="test">To home</Link>
			<Link link="/help" 	active className="test">To help</Link>
			<Link link="/32" 	active className="test">To custom</Link>

			<Switch>
				<Route path="/" to={<h1>Home</h1>} />
				<Route path="/help" to={<h1>Help</h1>} />
				<Route path="/{id}/" to={View} />
			</Switch>
		</Router>
	);
}