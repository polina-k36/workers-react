import './app-info.css'

const AppInfo = ({countWorkers, countIncrease}) => {
    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании NGT</h1>
            <h2>Общее число сотрудников: {countWorkers}</h2>
            <h2>Премию получат: {countIncrease}</h2>
        </div>
    );
}

export default AppInfo;