import {add_To_Cart} from "./constants";
const data = [];

export const cartData = (data, action)  => {
switch (action.type){
    case add_To_Cart: 
    console.log("reducer called", action)
    return 'Some data'
    default:
        console.log(`no data from reducer`)
        return `no data`
}
}
