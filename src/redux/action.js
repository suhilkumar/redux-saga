const addToCart = (data) => {
    console.log("action is called", data);
    return{
        type: 'SHOWVALUE',
        payload:{
            data,
        }
    }
}

export default addToCart; 