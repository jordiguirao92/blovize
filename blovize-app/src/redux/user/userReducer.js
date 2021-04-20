const INIT_STATE = null;

function userReducer(state = INIT_STATE, action) {
    if(action.type === 'SET_USER') {
        return action.payload;
    }
    return state
}

export default userReducer;