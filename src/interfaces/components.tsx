export interface iRoute {
    guard? : string[]|string,
    path?  : string,
    when?  : boolean,
    to?    : JSX.Element,
    data   : Object,
}

export interface iRouter {

}