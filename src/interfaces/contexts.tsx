//Interfaces
import { iRoute } from "./components";

export default interface iRouterContext {
    processRoute    (data : iRoute) : boolean,
    redirect        (to : string)   : void,
    current                         : string,
}