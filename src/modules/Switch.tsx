//Core
import * as React 	from "react";

//Contexts
import RouterContext    from "../contexts/Router";

//Interfaces
import { iRoute }       from "../interfaces/components";
import iRouterContext   from "../interfaces/contexts";

export default function Switch ({...props}) {

    //----------------------------
    // Properties
    //----------------------------

    //States
    const [ ComponentToRender, setcomponent ] = React.useState();

    //Contexts
    const { processRoute, current } = React.useContext(RouterContext) as iRouterContext;

    //----------------------------
    // Effects
    //----------------------------

    React.useEffect(() => {
        const children = React.Children.toArray(props.children);

        for (let i = 0; i < children.length; i++) {
            const child : JSX.Element = children[i];
            const childprops : iRoute = child.props;

            //Check if child is valid
            if (!React.isValidElement(child)) continue;

            //Check if route passes
            if (processRoute(childprops)) return setcomponent(child);
        }

        //No child selected
        return setcomponent(null);
    }, [current]);

    //----------------------------
    // Render
    //----------------------------

    return ComponentToRender ? ComponentToRender.props.to : null;
}