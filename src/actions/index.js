import { FILTER_ITEM,SET_USER_LIST,SET_MENU,SET_OPEN_ITEM,SET_ACTIVE_ITEM } from '../constants/actionTypes';
  
export function setMenu(menu) {
    return {
        type: SET_MENU,
        menu
      };
}
export function setActiveItem(activeItem) {
    return {
        type: SET_ACTIVE_ITEM,
        activeItem
    };
}
export function setOpenItem(openItem) {
    return {
        type: SET_OPEN_ITEM,
        openItem
    };
}
export function setUserList(user) {
    return {
        type: SET_USER_LIST,
        user
    };
}

export function filterItem(value) {
    let filterItem = value;

    return {
        type: FILTER_ITEM,
        filterItem
    }
}