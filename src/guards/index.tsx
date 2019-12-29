//Guard functions
import _guest   from "./guest";
import _logged  from "./logged";
import _when    from "./when";
import _path    from "./path";

//Separated export
export const guest  = _guest;
export const logged = _logged;
export const when   = _when;
export const path   = _path;

//Bundle of default guards
const bundle = {
    guest:  _guest,
    logged: _logged,
    when:   _when,
    path:   _path,
};

export default bundle;