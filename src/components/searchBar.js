import React from 'react'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.timer = 0;
    }
    handleKeyUp(value) {

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
                <input type="text" onKeyUp={e => this.handleKeyUp(e.target.value)} placeholder="请输入查找的员工" />
            </div>
        )
    }
}

export default SearchBar
