//Interfaces
import { iGuardData }   from "../interfaces/helpers";

//Helpers
import { testPath }     from "../helpers/route";

//Check route validation path
export default function path (_arguments : any[] | null, data : iGuardData) : boolean {
    
    //No path required
    if (!("path" in data.route)) return true;

    //Validate
    const response = testPath(data.route.path as string, data.context["current"]);

    //Route matches
    if (response) {
        data.setdata(response);
    }
    
    return !!response;
}