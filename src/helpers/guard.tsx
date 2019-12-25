//Contexts
import { iGuard }   from "../contexts/helpers";

//Turn a string guard into a object
export function buildGuard (guardstring : string) : iGuard {
    const split = guardstring.split(":");
    
    //No arguments
    if (split.length == 1) {
        return { name: split[0] };
    }
    else {
        const _arguments = split[1].split(",");

        return { name: split[0], arguments : _arguments };
    }
}

//Turn a prop into a guard string
export function printGuard (props : Object) : string[] {
    let response : string[] = [];

    for (const key in props) {
        const prop = props[key];

        //has argument
        if (prop !== true) {
            response.push(key + ":" + prop);
        }
        //without argument
        else {
            response.push(key);
        }
    }

    return response;
}