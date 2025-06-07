import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component{
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
    }
    onFilterList = (e) => {
        this.activeClass(e.currentTarget);
        const filter = e.currentTarget.getAttribute('data-filter');
        this.props.onFilterList(filter);
    }

    render() {
        return (
        <div className="btn-group">
            <button className="btn btn-light"
                    data-filter="all"
                    type="button"
                    onClick={this.onFilterList}>
                        Все сотрудники
            </button>
            <button className="btn btn-outline-light"
                    data-filter="promotion"
                    type="button"
                    onClick={this.onFilterList}>
                        На повешение
            </button>
            <button className="btn btn-outline-light"
                    data-filter="salary"
                    type="button"
                    onClick={this.onFilterList}>
                        ЗП выше 1000$
            </button>
        </div>
    )}
};

export default AppFilter;