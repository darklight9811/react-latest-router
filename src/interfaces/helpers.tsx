//Interfaces
import { iRoute } from "./components";

export interface iPath {
    raw : string,
    data: Object,
}

export interface iGuardData {
    route                   : iRoute,
    router                  : Object,
    setdata (income : any)  : void,
    context                 : Object,
}