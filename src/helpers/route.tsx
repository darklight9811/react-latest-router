//Test if the current path passes
export function testPath (path : string, current : string, exact : boolean = false) : Object | boolean {
    //Paths
    const splitpath     = path.split("/").filter( value => value !== "");
    const splitcurrent  = current.split("/").filter( value => value !== "");

    //Data
    let data    = {};

    //Match root
    if (splitpath.length == 0 && splitcurrent.length == 0) return data;
    //Exact match force
    if (splitpath.length !== splitcurrent.length && exact) return false;

    //Loop all parts
    for (let i = 0; i < splitpath.length; i++) {
        //Is a data compartiment
        if (splitpath[i].match(/\{\S+\}/)) {
            const name = splitpath[i].replace(/\{/, "").replace(/\}/,"");
            data[name] = splitcurrent[i];
        }
        //Equivalent match
        else {
            //Current ends earlier
            if (!splitcurrent[i]) return false;
            //Part matches
            if (splitpath[i] !== splitcurrent[i]) return false; 
        }
    }

    //Route matches
    return data;
}

// site.com/home/hi
// site.com/home/hi/
// site.com/hi