import { FILTER_ITEM,SET_USER_LIST } from '../constants/actionTypes';

const initialState = {
    userList: [],
    filterName:""
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case SET_USER_LIST:
            return { ...state, userList: action.userList };
            break;
        case FILTER_ITEM:
            return { ...state, filterName: action.filterItem };
            break;
        default:
            return state;
    }
}