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
                {name:"Виктория Орлова", salary: 1500, increase: false, promotion: false, id: 1},
                {name:"Петр Иванов", salary: 700, increase: false, promotion: true, id: 2},
                {name:"Лидия Осколкова", salary: 900, increase: false, promotion: false, id: 3},
                {name:"Диана Власова", salary: 1100, increase: true, promotion: false, id: 4},
                {name:"Дмитрий Демидова", salary: 1200, increase: false, promotion: false, id: 5},
            ]
        };
        this.maxId = 6;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            /* const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];  */

            const newArr = data.filter(item => item.id !== id)

            return {
                data: newArr
            }
        })
    }

    addWorker = (e, name, salary) => {
        e.preventDefault()
        if (name.replaceAll(' ', '').length > 3 && salary > 100){
            this.setState(({data}) => {
                const newArr = [...data, {name: name, 
                                          salary: salary, 
                                          increase: false,
                                          promotion: false, 
                                          id: this.maxId++}];
                return{
                    data: newArr
                };
            })
            return true
        }
        alert('Введите более корректные данные сотрудника. Имя сотрудника должно быть более 3 символов, а также его ЗП должна превышать 100$');
        return false
    }

    /* onToggleIncrease = (id) => {
        this.setState(({data}) => {
             const worker = data.filter(item => item.id === id)[0];
            worker.increase = !worker.increase;  - почему не работает - так как филтер не создает 
            копии внутренних объектов а хранит их ссылки => мы на прямую пытаемся изменить state что запрещено в React
            //const newArr = data.filter(item => {if (item.id === id) return worker; else return item } );
             const newArr = data.map(item =>
                item.id === id ? { ...item, increase: !item.increase } : item
              ); //метод map создает новый массив с новыми измененными элементами
            return{
                data: data.map(item =>
                    item.id === id ? { ...item, increase: !item.increase } : item
                  )
            } 
           //решение курса
           const index = data.findIndex(elem => elem.id === id);
           const old = data[index];
           const newItem = {...old, increase: !old.increase}
           const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
           return { 
            data : newArr
           } 
          //решение курса с map такое же

        })
        
    } */

        //оптимизация для продвижения и для премии
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item =>
                item.id === id ? { ...item, [prop]: !item[prop] } : item
            )
        }))
    }

    render() {
        const {data} = this.state;
        return (
            <div className="app">
                <AppInfo 
                    countWorkers={data.length}
                    countIncrease={data.filter(item => item.increase === true).length}/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <WorkersList 
                    data={data} 
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <WorkersAddForm  onAddWorkers={this.addWorker}/>
                
            </div>
        );
    }
}

export default App;