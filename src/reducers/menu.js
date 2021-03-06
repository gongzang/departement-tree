import { SET_MENU, SET_OPEN_ITEM, SET_ACTIVE_ITEM } from '../constants/actionTypes';

const initialState = {
    menuList:[],
    openItem:{},
    activeItem:{}
};

export default function menu(state = initialState, action) {
    switch (action.type) {
        case SET_MENU:
            return { ...state, menuList: action.menu };
        case SET_OPEN_ITEM:
            return { ...state, openItem: action.openItem };
        case SET_ACTIVE_ITEM:
            return { ...state, activeItem: action.activeItem };
        default:
            return state;
    }
}