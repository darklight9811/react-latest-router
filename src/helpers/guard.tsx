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