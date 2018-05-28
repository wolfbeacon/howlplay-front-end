import cloneDeep from "lodash/cloneDeep";

const navbar_default_state = {
    expanded: false,
    groups: ["abc", "123"] // array of group ids
};

export const DashboardNavbarReducer = (state=navbar_default_state, action) => {
    let newState = cloneDeep(state);
    switch (action.type) {
        case "TOGGLE_NAVBAR":
            newState.expanded = !state.expanded;
            break;
        default:
            break;
    }
    return newState;
};

export const DashboardReducer = (state, action) => {
    let newState = { ...state };
    switch (action.type){
        case "SET_QUIZ_TOKEN":
            newState = { ...state, quizToken: action.payload };
            break;
        default:
            break;
    }
    return newState;
};