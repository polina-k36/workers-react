import { Component } from 'react';

import './workers-add-form.css'

class WorkersAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    clearField = () => {
        this.setState({
            name : '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex">
                    <input type="text" 
                           className="form-control new-post-label" 
                           placeholder="Как его зовут?"
                           name="name"
                           value={name}
                           onChange={this.onValueChange}/>
                    <input type="number" 
                           className="form-control new-post-label" 
                           placeholder="ЗП в $?"
                           name="salary"
                           value={salary}
                           onChange={this.onValueChange}/>
                    <button 
                           type="submit" 
                           className="btn btn-outline-light"
                           onClick={(e) => {if (this.props.onAddWorkers(e, name, salary)) this.clearField()}}>
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}


export default WorkersAddForm;