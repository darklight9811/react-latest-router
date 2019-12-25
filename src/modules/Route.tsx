//Core
import * as React 	    from "react";

//Contexts
import RouterContext    from "../contexts/Router";
import iRouterContext   from "../interfaces/contexts";

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
        return processRoute(props.path, props);
    }, [current]);

    //----------------------------
    // Render
    //----------------------------

    return render && <Component />;
}