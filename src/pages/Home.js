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
                name: "总部门",

                user: [{

                    name: "Prometheus",

                    sex: "male"

                }, {

                    name: "Athena",

                    sex: "female"

                }],

                group: [
                    {
                        "name": "行政部门",
                        "user": []
                    },
                    {
                        "name": "东区",
                        "group": [
                            {
                                "name": "部门A",
                                "user": []
                            },
                            {
                                "name": "部门B",
                                "user": []
                            },
                            {
                                "name": "部门C",
                                "user": []
                            }
                        ]
                    },
                    {
                        "name": "南区",
                        "group": [
                            {
                                "name": "广州",
                                "user": [],
                                "group": [
                                    {
                                        "name": "广州",
                                        "user": []
                                    },
                                    {
                                        "name": "福建",
                                        "user": []
                                    },
                                    {
                                        "name": "广西",
                                        "user": []
                                    },
                                    {
                                        "name": "浙江",
                                        "user": []
                                    },
                                    {
                                        "name": "江苏",
                                        "user": []
                                    }
                                ]
                            },
                            {
                                "name": "福建",
                                "user": []
                            },
                            {
                                "name": "广西",
                                "user": []
                            },
                            {
                                "name": "浙江",
                                "user": []
                            },
                            {
                                "name": "江苏",
                                "user": []
                            }
                        ]
                    },
                    {
                        "name": "特勤部",
                        "user": []
                    },
                    {
                        "name": "西区",
                        "group": [
                            {
                                "name": "陕西",
                                "user": []
                            },
                            {
                                "name": "新疆",
                                "user": []
                            }
                        ]
                    },
                    {
                        "name": "北区",
                        "group": [
                            {
                                "name": "黑龙江",
                                "user": []
                            },
                            {
                                "name": "辽宁",
                                "user": []
                            },
                            {
                                "name": "河北",
                                "user": []
                            },
                            {
                                "name": "山西",
                                "user": []
                            }
                        ]
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

    createUserList() {
        let userList = [];
        for (let i = 0; i < 20; i++) {
            let user = {
                id: this.userId++,
                name: 'name' + Math.random().toString().slice(2, 6)
            };
            userList.push(user);
        }
        return userList;
    }

    initUsers(departmentList) {
        if (!departmentList) {
            return;
        }
        for (let i = 0; i < departmentList.length; i++) {
            departmentList[i].user = this.createUserList();
            if (departmentList[i].group) {
                this.initUsers(departmentList[i].group);
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
                        <Route render={({ location }) => {
                            return (
                                <Switch>
                                    {console.log(this.props)}
                                    <Route location={location} path={`/user`} component={UserListPage} />
                                </Switch>
                            )
                        }} />
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