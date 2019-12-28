We offer you access to our router context, so you can redirect, use guards and check the current route inside of it. It's located in:

``` javascript
import RouterContext from "react-complete-router/dist/contexts/Router";
```

The data youcan access is:
- current: the current url considered by the router
- data: this is are the router props
- redirect: change the current path of the router
- processGuard: if you wish to use our guard system outside of routes, you may do so here
- processRoute: accept the props to run priority and non priority guards 