import WorkersListItem from '../workers-list-item/workers-list-item';
import './workers-list.css'

const WorkersList = () => {
    return (
        <ul className="app-list list-group">
            <WorkersListItem/>
            <WorkersListItem/>
            <WorkersListItem/>
            <WorkersListItem/>
        </ul>
    )
}

export default WorkersList;