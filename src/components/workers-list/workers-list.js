import WorkersListItem from '../workers-list-item/workers-list-item';
import './workers-list.css'

const WorkersList = ({data, onDelete, onToggleProp}) => {
    const arrayWorkers = data.map(el => {
        const {id, ...itemProps} = el;
        return (
        //name={el.name} salary={el.salary} - альтернатива {...el} должны быть одинаковые имена 
        <WorkersListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
    );
         
    });
    return (
        <ul className="app-list list-group">
            {arrayWorkers}
        </ul>
    )
}

export default WorkersList; 