import React from 'react';
import Item from './Item';

class MenuUl extends React.Component {

    render() {
        const { tier, className,menuList,activeItem,openItems,handleItemClick } = this.props;

        return (

            <nav className={className}>
                {

                    menuList && menuList.map(item => {
                        return (
                            <div key={item.name}>
                                <Item tier={tier} item={item} openItems={openItems} activeItem={activeItem} handleItemClick={handleItemClick}>
                                </Item>
                                {
                                    item.group && item.group.length > 0 && (
                                        <MenuUl tier={tier+1} className={`sub-menu ${openItems && openItems.indexOf(item) !== -1 ? 'in' : ''}`} 
                                            menuList={item.group} 
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