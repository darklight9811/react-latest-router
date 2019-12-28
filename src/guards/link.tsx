//Interfaces
import { iGuardData } from "../interfaces/helpers";

//Check route validation
export default function link (_arguments : any[] | null, data : iGuardData) : Object | boolean {
    //Place to go
    const go = data["route"]["link"];

    //Go to the place
    data.context["redirect"](go);
    
    //We don't need to return anything, since the component will change
    //the current rendered
    return false;
}