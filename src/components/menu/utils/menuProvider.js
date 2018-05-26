import React from 'react';

function menuProvider(menuData) {
    return function (Comp) {

        const initialMenuState = {
            openItems: [],
            activeItem: {}
        };

        class MenuComponent extends React.Component {
            constructor(props) {
                super(props);
                this.state = initialMenuState;

                this.handleItemClick = this.handleItemClick.bind(this);
            }

            handleItemClick(e, item) {
                const { openItems, activeItem } = this.state;
                if (item.group && item.group.length > 0) {
                    let navNode = this.getParentNav(e.target);
                    if (openItems.indexOf(item) === -1) {
                        this.toggleDisplay(navNode, true);
                        openItems.push(item);
                    } else {
                        this.toggleDisplay(navNode, false);
                        openItems.splice(openItems.indexOf(item), 1);;
                    }
                    this.setState({
                        openItems: openItems.slice()
                    });
                }
                if (item !== activeItem) {
                    this.setState({
                        activeItem: item
                    });
                    this.props.setActiveItem(item);
                    this.props.setUserList(item.user||[]);
                }
            }

            getParentNav(navNode) {
                if (navNode && navNode.className === 'wrap-menu') {
                    return null;
                }
                while (navNode && navNode.tagName !== "DIV") {
                    if (navNode.className.indexOf('wrap-menu') !== -1) {
                        return null;
                    }
                    navNode = navNode.parentNode;

                }
                if (navNode && navNode.children.length === 2) {
                    navNode = navNode.children[1];
                    return navNode;
                }
                return null;
            }

            toggleDisplay(nav, show) {
                if (nav) {

                    let height = 0;
                    if (show) {
                        for (let i = 0; i < nav.children.length; i++) {
                            height += nav.children[i].scrollHeight;
                        }
                    }
                    nav.style.height = height + "px";
                    let changeHeight = 0;
                    if (!show) {
                        changeHeight = 0 - nav.scrollHeight;
                    } else {
                        changeHeight = height;
                    }
                    this.toggleParentNavs(this.getParentNav(nav.parentNode.parentNode), changeHeight);
                }
            }

            toggleParentNavs(nav, height) {
                if (nav) {
                    nav.style.height = nav.scrollHeight + height + 'px';
                    this.toggleParentNavs(this.getParentNav(nav.parentNode.parentNode), height);
                }

            }

            render() {
                const { openItems, activeItem } = this.state;
                return (
                    <Comp
                        {...this.props}
                        openItemList={openItems}
                        nowItem={activeItem}
                        handleItemClick={this.handleItemClick}
                    />
                );
            }
        }

        return MenuComponent;
    }
}

export default menuProvider;