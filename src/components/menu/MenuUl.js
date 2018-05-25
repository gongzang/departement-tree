import React from 'react';
import Item from './Item';

class MenuUl extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { tier, className,menuList,activeItem,openItems,handleItemClick } = this.props;

        return (

            <nav className={className}>
                {

                    menuList && menuList.map(item => {
                        return (
                            <div>
                                <Item tier={tier} item={item} openItems={openItems} activeItem={activeItem} handleItemClick={handleItemClick}>
                                </Item>
                                {
                                    item.submenu && item.submenu.length > 0 && (
                                        <MenuUl tier={tier+1} className={`sub-menu ${openItems && openItems.indexOf(item) != -1 ? 'in' : ''}`} 
                                            menuList={item.submenu} 
                                            openItems={openItems} 
                                            activeItem={activeItem}
                                            handleItemClick={handleItemClick}
                                            />
                                    )
                                }
                            </div>
                            )
                                
                    })
                }
            </nav>
        );
    }
}
export default MenuUl;