import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import TablePage from './TablePage';
import './TablePage.css';
import { usersList } from './UserFunctions';
import { userRemove } from './UserFunctions';
import { unblockStatus } from './UserFunctions';
import { blockStatus } from './UserFunctions';
import axios from 'axios';

class Profile extends Component {
    constructor() {
        super()
        this.state = { data: [] };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.checkboxId = this.checkboxId.bind(this);
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decode = jwt_decode(token)
        usersList().then((response) => {
            let data = response.data;
            this.setState({
                data: data
            });
            console.log(data)
        })
            .catch(error => {
                console.log(error);
            });
    }
    
    checkboxId = (id) => {
        console.log(id);
       this.setState({checkboxId: id})
    }
   
    handleFormSubmit(id) {
        axios.post('http://localhost:4000/delete/'+ id)
        .then(response => { 
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        })
    }

    render() {
        return (
            <div>
                <TablePage state={this.state} handleFormSubmit={this.handleFormSubmit} checkboxId={this.checkboxId}/>
            </div>
        )
    }
}

export default withRouter(Profile);