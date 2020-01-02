//Core
import React from './node/react';

//Router
import { Router, Route, Switch } from './router';

//Views
import Home 	from "./views/Home";
import Start 	from "./views/Start";
import NotFound	from "./views/NotFound";

export default function App () {
	return (
		<Router>			
			<Switch>
				<Route path="/" 		to={Home} 		/>
				<Route path="/start"	to={Start} 		/>
				<Route 					to={NotFound} 	/>
			</Switch>
		</Router>
	);
}