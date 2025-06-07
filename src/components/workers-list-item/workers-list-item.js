import './workers-list-item.css';

const WorkersListItem = (props) => {
    const {name, salary, onDelete, onToggleProp, increase, promotion} = props;
    return(
        <li className={"list-group-item d-flex justify-content-between" +
            (increase ? " increase" : "") +  (promotion ? " like" : "")
        }>
            <span data-toggle="promotion" 
                  onClick={onToggleProp} 
                  className="list-group-item-label">{name}</span>
            <input type="text" 
                    className="list-group-item-input" 
                    defaultValue={salary + '$'}/>
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


export default WorkersListItem;