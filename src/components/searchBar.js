import React from 'react'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.timer = 0;
    }
    handleChange(value) {

        if (this.timer) {
            clearTimeout(this.timer);
        }

        this.timer = setTimeout(() => {
            this.props.filterItem(value);
            this.timer = 0;
        }, 200);
    }

    render() {
        return (
            <div className="pure-form">
                <input type="text" onChange={e => this.handleChange(e.target.value)} placeholder="请输入过滤的的员工" />
            </div>
        )
    }
}

export default SearchBar
