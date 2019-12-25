export interface iRoute {
    guard? : string[]|string,
    path?  : string,
    when?  : boolean,
    to?    : JSX.Element,
}

export interface iRouter {

}