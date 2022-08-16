import { add_To_Cart } from "./constants";
const addToCart = (data) => {
    console.log("action is called", data);
    return{
        type: add_To_Cart,
        payload:{
            data,
        }
    }
}

export default addToCart; 