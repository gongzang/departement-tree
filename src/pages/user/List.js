import React from 'react';
import * as ItemsActions from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from '../../components/searchBar';
import Content from '../../components/content';

class List extends React.Component{
    render(){
        const {user,filterItem} = this.props;
        return (
            <div style={{padding:'16px'}}>
            <SearchBar filterItem={filterItem}/>
            <Content user={user}/>
            </div>
        );
    }
}


function mapStateToProps(state, props) {
    return {

        user: state.user //这里的state比较简单，可以很复杂
    };
}
//这里把方法也转为props，以供组件使用
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ItemsActions, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(List);