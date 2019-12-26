//Core
import * as React 	from "react";

//Contexts
import RouterContext    from "../contexts/Router";

//Interfaces
import iRouterContext   from "../interfaces/contexts";

export default function Switch ({...props}) {

    //----------------------------
    // Properties
    //----------------------------

    //States
    const [ ComponentToRender, setcomponent ] = React.useState();

    //Contexts
    const { processRoute, current, data } = React.useContext(RouterContext) as iRouterContext;

    //----------------------------
    // Effects
    //----------------------------

    React.useEffect(() => {
        const children = React.Children.toArray(props.children);

        for (let i = 0; i < children.length; i++) {
            const child : JSX.Element = children[i];
            const {to, ...childprops} = child.props;

            //Check if child is valid
            if (!React.isValidElement(child)) continue;

            //Check if route passes
            const result = processRoute(childprops);
            if (result) {
                const newprops = {...childprops, ...(result as Object)};

                //Is a component
                if (React.isValidElement(to)) return setcomponent (to);
                //Is a literal
                else return setcomponent(React.createElement(to, newprops));
            }
        }

        //No child selected
        return setcomponent(null);
    }, [current, data]);

    //----------------------------
    // Render
    //----------------------------

    console.log(ComponentToRender);

    return ComponentToRender ? ComponentToRender:null;
}