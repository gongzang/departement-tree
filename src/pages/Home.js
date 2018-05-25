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
            this.testMenu = [
                {
                    "name": "行政部门",
                    "userList":[]
                },
                {
                    "name": "东区",
                    "submenu": [
                        {
                            "name": "部门A",
                            "userList":[]
                        },
                        {
                            "name": "部门B",
                            "userList":[]
                        },
                        {
                            "name": "部门C",
                            "userList":[]
                        }
                    ]
                },
                {
                    "name": "南区",
                    "submenu": [
                        {
                            "name": "广州",
                            "userList":[],
                            "submenu": [
                                {
                                    "name": "广州",
                                    "userList":[]
                                },
                                {
                                    "name": "福建",
                                    "userList":[]
                                },
                                {
                                    "name": "广西",
                                    "userList":[]
                                },
                                {
                                    "name": "浙江",
                                    "userList":[]
                                },
                                {
                                    "name": "江苏",
                                    "userList":[]
                                }
                            ]
                        },
                        {
                            "name": "福建",
                            "userList":[]
                        },
                        {
                            "name": "广西",
                            "userList":[]
                        },
                        {
                            "name": "浙江",
                            "userList":[]
                        },
                        {
                            "name": "江苏",
                            "userList":[]
                        }
                    ]
                },
                {
                    "name": "特勤部",
                    "userList":[]
                },
                {
                    "name": "西区",
                    "submenu": [
                        {
                            "name": "陕西",
                            "userList":[]
                        },
                        {
                            "name": "新疆",
                            "userList":[]
                        }
                    ]
                },
                {
                    "name": "北区",
                    "submenu": [
                        {
                            "name": "黑龙江",
                            "userList":[]
                        },
                        {
                            "name": "辽宁",
                            "userList":[]
                        },
                        {
                            "name": "河北",
                            "userList":[]
                        },
                        {
                            "name": "山西",
                            "userList":[]
                        }
                    ]
                }
            ]
    }
    componentWillMount() {
        var shelf = this;
        // get('/testMenu')
        //     .then((res) => {
        //         this.initUsers(res);
        //         shelf.props.setMenu(res);
        //     });
        let res = this.testMenu;
        this.initUsers(res);
                shelf.props.setMenu(res);
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
            if(departmentList[i].submenu){
                this.initUsers(departmentList[i].submenu);
            }
        }
    }

    

    render() {
        const { menu: { activeItem },match } = this.props;
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
                    <Route render={({ location }) => {
                  return(
                        <Switch>
                            {console.log(this.props)}
                        <Route location={location} path={`/userList`} component={UserListPage} />
                    </Switch>
                  )}}/>
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