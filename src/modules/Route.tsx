//Core
import * as React 	    from "react";

//Contexts
import RouterContext    from "../contexts/Router";
import iRouterContext   from "../interfaces/contexts";

//Interfaces
import { iRoute } from "../interfaces/components";

export default function Route ({...props}) {
    
    //----------------------------
    // Properties
    //----------------------------

    //contexts
    const { processRoute, current }  = React.useContext(RouterContext) as iRouterContext;

    //consts
    const Component         = props.to;

    //----------------------------
    // Memos
    //----------------------------

    const render = React.useMemo(() : boolean => {
        return processRoute(props as iRoute);
    }, [current]);

    //----------------------------
    // Render
    //----------------------------

    return render && <Component />;
}