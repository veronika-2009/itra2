import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import TablePage from './TablePage';
import './TablePage.css';
import { usersList } from './UserFunctions';

class Profile extends Component {
    constructor() {
        super()
        this.state = { data: [] };
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

    render() {
        return (
            <div>
                <TablePage state={this.state} />
            </div>


        )
    }
}

export default Profile;