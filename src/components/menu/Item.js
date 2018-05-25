import React from 'react';
import { NavLink } from 'react-router-dom';

class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {tier, item, openItems,activeItem,handleItemClick } = this.props;
        return (
            <NavLink style={{'padding-left':tier*14+'px'}} className={`${item === activeItem ? 'landing_link' : ''} ${openItems && openItems.indexOf(item) != -1 ? 'open' : ''}`} to={ (item.id ? '/app/departmentUsers/'+item.id : '/app/') }  onClick={(e)=>handleItemClick(e,item)}>
                {item.name}
                {
                    item.submenu && item.submenu.length > 0 && (
                        <span className='arrow'></span>
                    )
                }
            </NavLink>
        );
    }
}
export default Item;