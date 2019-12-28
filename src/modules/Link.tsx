//Core
import * as React 	from "react";

//Contexts
import RouterContext from "../contexts/Router";

//Interfaces
import iRouterContext from "../interfaces/contexts";

export default function Route ({...props}) {
    
    //----------------------------
    // Properties
    //----------------------------

    //contexts
    const { processRoute } = React.useContext(RouterContext) as iRouterContext;

    //----------------------------
    // Callbacks
    //----------------------------

    const onClick = React.useCallback((event) => {
        //Prevent page reload
        event.preventDefault();

        //Run guards
        processRoute(props);
    }, [props]);

    //----------------------------
    // Render
    //----------------------------

    return (
        <a onClick={onClick} href="#" {...props}>
            {props.children}
        </a>
    );
}