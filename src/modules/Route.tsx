//Core
import * as React 	    from "react";

//Contexts
import RouterContext    from "../contexts/Router";
import iRouterContext   from "../interfaces/contexts";

//Interfaces
import { iRoute } from "../interfaces/components";

export default function Route ({to = () => null, ...props}) {
    
    //----------------------------
    // Properties
    //----------------------------

    //contexts
    const { processRoute, current, data }  = React.useContext(RouterContext) as iRouterContext;

    //----------------------------
    // Memos
    //----------------------------

    const Component = React.useCallback(() : JSX.Element | null => {
        const response = processRoute(props as iRoute);

        //Route passes
        if (response && to !== null) {
            return React.createElement(to, {...props, ...(response as Object)});
        }

        //Route not passes
        return null;
    }, [current, data]);

    //----------------------------
    // Render
    //----------------------------

    return <Component />;
}