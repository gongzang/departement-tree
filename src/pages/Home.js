import React from 'react';
import '../styles/home.css';
import { get } from '../utils/request';
import WrapMenu from '../components/menu/WrapMenu';
import * as ItemsActions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Route, Switch } from 'react-router-dom';

import UserListPage from './user/List';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.userId = 0;
    }
    componentWillMount() {
        var shelf = this;
        get('/testMenu')
            .then((res) => {
                this.initUsers(res);
                shelf.props.setMenu(res);
            });
    }

    createUserList(){
        let userList = [];
        for(let i=0;i<20;i++){
            let user = {
                id : this.userId ++,
                name : 'name' + Math.random().toString().slice(2,6)
            };
            userList.push(user);
        }
        return userList;
    }

    initUsers(departmentList){
        if(!departmentList) {
            return;
        }
        for(let i=0;i<departmentList.length ;i++){
            departmentList[i].userList = this.createUserList();
            console.log(departmentList[i]);
            if(departmentList[i].submenu){
                this.initUsers(departmentList[i].submenu);
            }
        }
    }

    

    render() {
        const { menu: { activeItem }, match } = this.props;
        return (
            <div className='home-page'>
                <WrapMenu {...this.props}>

                </WrapMenu>
                <div className='right-div'>
                    <div className="row border-bottom">
                        <span className="logoTit">Department</span><span className="logoSim">部门管理</span>
                    </div>
                    <div className="row white-bg border-bottom page-heading">
                        <p className="breadcrumb" id="breadcrumb">{activeItem.name}</p>
                    </div>
                    <div className="row content">
                        <Switch>
                            <Route path={`/userList`} component={UserListPage} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {

        menu: state.menu //这里的state比较简单，可以很复杂
    };
}
//这里把方法也转为props，以供组件使用
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ItemsActions, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);