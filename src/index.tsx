//Modules
import _Router		from "./modules/Router";
import _Route 		from "./modules/Route";
import _Link 		from "./modules/Link";
import _Switch 		from "./modules/Switch";

//Separated
export const Router 	= _Router;
export const Route 		= _Route;
export const Link 		= _Link;
export const Switch 	= _Switch;

//Bundled
const bundled = {
	Router: 	_Router,
	Route: 		_Route,
	Link: 		_Link,
	Switch: 	_Switch,
};

export default bundled;