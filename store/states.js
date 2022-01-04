const initState = {
    credintials:{username:'',password:''},
    token:'sda',
}

const stateReducer = (state= initState, action) =>{
    const {type, payload} = action;

    switch(type){

       default:
           return state; 
    }

}

export default stateReducer;