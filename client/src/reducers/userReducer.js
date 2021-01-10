export const userReducer = (state=null, action) => {
    //we want to get currently logged in user from firebase, based on teh authentication state of that user
    //we want to populate teh redux state so that we can access that user information and user token throughout application
    switch(action.type) {
        case "LOGGED_IN_USER": //type
            return action.payload; //payload contains user name, user email token whatever to be available in state
        case "LOGOUT":
            return action.payload;//user to be null, no longer value in a state
        default: 
            return state;
            
    }
}