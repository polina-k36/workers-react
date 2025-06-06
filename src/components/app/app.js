import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import WorkersList from '../workers-list/workers-list';
import WorkersAddForm from '../workers-add-form/workers-add-form';

import './app.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name:"Виктория Орлова", salary: 1500, id: 1},
                {name:"Петр Иванов", salary: 700, id: 2},
                {name:"Лидия Осколкова", salary: 900, id: 3},
                {name:"Диана Власова", salary: 1100, id: 4},
                {name:"Дмитрий Демидова", salary: 1200, id: 5},
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            //const index = data.findIndex(elem => elem.id === id);
            /* const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after]; */

            const newArr = data.filter(item => item.id !== id)

            return {
                data: newArr
            }
        })
    }

    render() {
        const {data} = this.state;
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <WorkersList data={data} onDelete={this.deleteItem}/>
                <WorkersAddForm/>
                
            </div>
        );
    }
}

export default App;