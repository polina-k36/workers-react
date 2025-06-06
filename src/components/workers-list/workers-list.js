import WorkersListItem from '../workers-list-item/workers-list-item';
import './workers-list.css'

const WorkersList = ({data, onDelete}) => {
    const arrayWorkers = data.map(el => {
        const {id, ...itemProps} = el;
        return (
        //name={el.name} salary={el.salary} - альтернатива {...el} должны быть одинаковые имена 
        <WorkersListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}/>
    );
         
    });
    return (
        <ul className="app-list list-group">
            {arrayWorkers}
        </ul>
    )
}

export default WorkersList; 