//Core
import React from './node/react';

//Router
import { Router, Route, Switch } from './router';

//Views
import Home 		from "./views/Home";
import Start 		from "./views/Start";
import Components	from "./views/Components";
import Guards		from "./views/Guards";
import Contexts		from "./views/Contexts";
import Extending	from "./views/Extending";
import Contribution	from "./views/Contribution";
import NotFound		from "./views/NotFound";

export default function App () {
	return (
		<Router>			
			<Switch>
				<Route path="/" 			to={Home} 			/>
				<Route path="/start"		to={Start} 			/>
				<Route path="/components"	to={Components}		/>
				<Route path="/guards"		to={Guards}			/>
				<Route path="/contexts"		to={Contexts}		/>
				<Route path="/extending"	to={Extending}		/>
				<Route path="/contribution"	to={Contribution}	/>
				<Route 						to={NotFound} 		/>
			</Switch>
		</Router>
	);
}