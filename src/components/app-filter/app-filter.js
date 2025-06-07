import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all'
        };
        this.buttonsData = [
            {name: 'all', label: 'Все сотрудники'},
            {name: 'promotion', label: 'На повышение'},
            {name: 'salary', label: 'ЗП выше 1000$'}
        ];
        this.buttons = this.buttonsData.map(({name, label}) => {
            return (
                <button className={(name === this.state.filter) 
                                            ? "btn btn-light"
                                            : "btn btn-outline-light"}
                    data-filter={name}
                    type="button"
                    onClick={this.onFilterList}>
                        {label}
                </button>
            )
        });
    }

    getSiblings = (target) => {
        let siblings = []
        let sibling = target.parentNode.firstChild;

        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== target){
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling;
        }
        return siblings;
    }

    activeClass = (target) => {
        const siblings = this.getSiblings(target);
        target.classList.add('btn-light');
        target.classList.remove('btn-outline-light');
        siblings.forEach(item => {
            item.classList.remove('btn-light')
            item.classList.add('btn-outline-light')
        });
        console.log(this.buttons);
    }
    onFilterList = (e) => {
        this.activeClass(e.currentTarget);
        const filter = e.currentTarget.getAttribute('data-filter');
        this.setState({filter})
        this.props.onFilterList(filter);
    }

    render() {
        return (
        <div className="btn-group">
            {this.buttons}
        </div>
    )}
};

export default AppFilter;