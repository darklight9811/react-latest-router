//Core
import * as React 	    from "react";

//Contexts
import RouterContext    from "../contexts/Router";

//Interfaces
import { iRoute }   from "../interfaces/components";
import { iPath }    from "../interfaces/helpers";

//Helpers
import { testPath }    from "../helpers/route";

//Guards
import { buildGuard }   from "../helpers/guard";
import defaultBundle    from "../guards";

export default function Router ({basepath = window.location.pathname, guards = ["web"], ...props}) {

    //----------------------------
    // Properties
    //----------------------------

    //states
    const [ current, setcurrent ]   = React.useState(basepath);
    const [ readyguards ]           = React.useState(defaultBundle);

    //----------------------------
    // Callbacks
    //----------------------------

    const onProcessRoute = React.useCallback((path : string, data : iRoute) : boolean => {
        //Check when
        if (!onProcessValidate(data.when)) return false;
        
        //Check path
        if (!onProcessPath(path)) return false;
        
        //Check guards
        if (!onProcessGuard(data.guard, data)) return false;

        //Route matches
        return true;
    }, [current]);

    const onProcessValidate = React.useCallback((when : boolean | undefined) => {
        //When validation not required
        if (when === undefined) return true;

        //Validate when
        return !!when;
    }, [current]);

    const onProcessPath = React.useCallback((path : string) : iPath|boolean => {
        return testPath(path, current);
    }, [current]);

    const onProcessGuard = React.useCallback((guards : string[]|string|undefined, route : iRoute) : boolean => {
        //Guard check not necessary
        if (guards === undefined) return true;

        //Validate guards
        const _guards : string[] = Array.isArray(guards)? (guards as string[]):[guards as string];

        //Loop guards
        for (let i = 0; i < _guards.length;i++) {
            //Build guard
            const guard = buildGuard(_guards[i]);

            //Guard available
            if (guard.name in readyguards) {
                const response = readyguards[guard.name](guard.arguments, route, props);

                //Guard fail
                if (!response) return false;
            }
            else {
                console.warn("Requested guard [" + _guards[i] + "] was not found.");
            }
        }

        //All guards passes
        return true;
    }, []);

    const onRedirect = React.useCallback((newpath : string) : void => {
        setcurrent(newpath);
    }, [current]);

    const handleHash = React.useCallback(() => {
        console.log("External hash change");
        setcurrent(window.location.pathname);
    }, [current]);
    
    //----------------------------
    // Effects
    //----------------------------

    //Event binding
    React.useEffect(() => {
        window.addEventListener("popstate", handleHash, false);

        //Unbind
        return () => {
            document.removeEventListener("hashchange", handleHash,false);
        };
    }, []);

    React.useEffect(() : void => {
        //Update browser
        window.history.pushState({}, window.document.title, current);
    }, [current]);

    //----------------------------
    // Render
    //----------------------------

    const context = {
        current:            current,
        processRoute:       onProcessRoute,
        processPath:        onProcessPath,
        processGuard:       onProcessGuard,
        redirect:           onRedirect,
        processValidate:    onProcessValidate,
    };

    return (
        <RouterContext.Provider value={context}>
            {props.children}
        </RouterContext.Provider>
    );
}