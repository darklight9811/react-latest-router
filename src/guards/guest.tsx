//Interfaces
import { iRoute } from "../interfaces/components";

//Check router authentication and only pass if none is given
export default function guest (_arguments : any[] | null, route : iRoute, router : {auth: any}) {
    //No auth given
    if (!("auth" in router)) return true;

    //Check if route is functional
    if (route.to === null) return false;

    //Check for guest
    if (router.auth == null) return true;

    //You are actually logged
    return false;
}