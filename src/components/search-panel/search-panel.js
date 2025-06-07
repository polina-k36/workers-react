import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component { 
    constructor(props){
        super(props);
        this.state ={
            searchStr: ''
        }
    }

    onUpdateSearch = (e) => {
        const searchStr = e.target.value;
        this.setState({searchStr});
        this.props.onUpdateSearch(searchStr);
    }

    render() {
        return <input type="text"
                      className="form-control search-input"
                      placeholder="Найти сотрудника"
                      value={this.state.searchStr} 
                      onChange={this.onUpdateSearch}/>
    }
}

export default SearchPanel;