//Interfaces
import { iGuardData } from "../interfaces/helpers";

//Check router authentication and only pass if none is given
export default function logged (_arguments : any[] | null, data : iGuardData) {
    //No auth given
    if (!("auth" in data.router)) return false;

    //Check for guest
    if (data.router["auth"] == null) return false;

    //You are actually logged
    return true;
}