const INIT_STATE = false;

function sidebarReducer(state = INIT_STATE, action) {
    if(action.type === 'SET_SIDEBAR') {
        return action.payload;
    }
    return state
}

export default sidebarReducer;