import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import WorkersList from '../workers-list/workers-list';
import WorkersAddForm from '../workers-add-form/workers-add-form';

function App(){

    const data = [
        {name:"Виктория Орлова", salary: 1500, increase: true, id: 1},
        {name:"Петр Иванов", salary: 700, increase: false, id: 2},
        {name:"Лидия Осколкова", salary: 900, increase: true, id: 3},
        {name:"Диана Власова", salary: 1100, increase: false, id: 4},
        {name:"Дмитрий Демидова", salary: 1200, increase: false, id: 5},
    ]
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <WorkersList data={data}/>
            <WorkersAddForm/>
            
        </div>
    );
}

export default App;