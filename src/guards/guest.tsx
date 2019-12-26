//Interfaces
import { iGuardData } from "../interfaces/helpers";

//Check router authentication and only pass if none is given
export default function guest (_arguments : any[] | null, data : iGuardData) : Object | boolean {
    //No auth given
    if (!("auth" in data.router)) return true;

    //Check for guest
    return !data.router["auth"];
}