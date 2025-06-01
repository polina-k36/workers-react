import { Component } from 'react';
import './workers-list-item.css';

class WorkersListItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            increase: props.increase
        }
    }

    changeIncrease = () => {
        this.setState(state => ({
            increase: !state.increase
        }))
    }

    render() {
        const {name, salary} = this.props;
        const {increase} = this.state;
        return(
            <li className={"list-group-item d-flex justify-content-between" +
                (increase ? " increase" : "")
            }>
                <span className="list-group-item-label">{name}</span>
                <input type="text" 
                       className="list-group-item-input" 
                       defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={this.changeIncrease} type="button" 
                            className="btn-cookie btn-sm">
                            <i className="fas fa-cookie"></i>    
                    </button>
                    <button type="button" 
                            className="btn-trash btn-sm">
                            <i className="fas fa-trash"></i>    
                    </button>
                    <i className="fas fa-star"></i>    
                </div>
            </li>
        );
    }
}

export default WorkersListItem;