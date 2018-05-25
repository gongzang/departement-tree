import React, { Component } from 'react'

class Content extends Component {
    render() {
        const { user: { userList, filterName } } = this.props;
        return (
            <table className="dataintable">
                <thead>
                    <tr>
                        <th>用户ID</th>
                        <th>用户名</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map((user) => {
                            return (!filterName || user.name.indexOf(filterName) !== -1) && (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default Content
