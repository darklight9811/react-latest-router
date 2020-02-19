import { ReactElement, ReactChildren, ReactChild, ComponentElement, FunctionComponent, Props } from "react";

export interface iReactProps extends Props<any> {
	children? : iReactComponent | any,
	to?       : any
}

export interface iReactComponent extends FunctionComponent {
  props? : iReactProps
}
