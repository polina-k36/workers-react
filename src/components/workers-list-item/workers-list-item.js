import { Component } from 'react';

import './workers-list-item.css';

class WorkersListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            salary: this.props.salary
        }
    }

    onChangeSalary = (e) => {
        const sal = parseInt(e.target.value)
        const salary = isNaN(sal) ? 0 : sal 
        this.setState({salary})
        this.props.onChangeSalary(this.props.id, salary)
    }

    render() {
        const {name, salary, onDelete, onToggleProp, increase, promotion} = this.props;
    return(
        <li className={"list-group-item d-flex justify-content-between" +
            (increase ? " increase" : "") +  (promotion ? " like" : "")
        }>
            <span data-toggle="promotion" 
                  onClick={onToggleProp} 
                  className="list-group-item-label">{name}</span>
            <input type="text" 
                    className="list-group-item-input" 
                    defaultValue={salary + '$'}
                    onChange={this.onChangeSalary}/>
            <div className="d-flex justify-content-center align-items-center">
                <button data-toggle="increase"
                        onClick={onToggleProp} 
                        type="button" 
                        className="btn-cookie btn-sm">
                        <i className="fas fa-cookie"></i>    
                </button>
                <button type="button" 
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>    
                </button>
                <i className="fas fa-star"></i>    
            </div>
        </li>
    );
    }
}


export default WorkersListItem;