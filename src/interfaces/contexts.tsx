//Interfaces
import { iRoute } from "./components";

export default interface iRouterContext {
    processRoute    (data : iRoute) : boolean | Object,
    redirect        (to : string)   : void,
    current                         : string,
    data?                           : Object,
}