import React from 'react';
import '../../styles/components/wrap-menu.css';
import MenuUl from './MenuUl';
import menuProvider from './utils/menuProvider';

class WrapMenu extends React.Component {
    render() {
        const { menu:{menuList},openItemList,nowItem, match,handleItemClick } = this.props;
        return (
            <MenuUl className="nav-left wrap-menu" tier={1} openItems={openItemList} activeItem={nowItem} menuList={menuList} match={match} handleItemClick={handleItemClick}/>
        );
    }
}

WrapMenu = menuProvider()(WrapMenu);

export default WrapMenu;