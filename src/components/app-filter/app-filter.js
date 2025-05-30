import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-light"
                    type="button">
                        Все сотрудники
            </button>
            <button className="btn btn-outline-light"
                    type="button">
                        На повешение
            </button>
            <button className="btn btn-outline-light"
                    type="button">
                        ЗП выше 1000$
            </button>
        </div>
    )
};

export default AppFilter;