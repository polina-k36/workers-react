import { Component } from 'react';
import './workers-list-item.css';

class WorkersListItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            increase: false,
            promotion: false
        }
    }

    changeIncrease = () => {
        this.setState(state => ({
            increase: !state.increase
        }))
    }

    changePromotion = () => {
        this.setState(({promotion}) => ({
            promotion: !promotion
        }))
    }

    render() {
        const {name, salary, onDelete} = this.props;
        const {increase, promotion} = this.state;
        return(
            <li className={"list-group-item d-flex justify-content-between" +
                (increase ? " increase" : "") +  (promotion ? " like" : "")
            }>
                <span onClick={this.changePromotion} className="list-group-item-label">{name}</span>
                <input type="text" 
                       className="list-group-item-input" 
                       defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={this.changeIncrease} type="button" 
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