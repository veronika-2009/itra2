import React, { Component } from 'react';
import { withRouter, Redirect, Route, Router, useRouterHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import TablePage from './TablePage';
import { usersList } from './UserFunctions';
import axios from 'axios';
import { useHistory } from 'react-router';


class Profile extends Component {
    constructor() {
        super()
        this.state = { data: [] };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.checkboxId = this.checkboxId.bind(this);
        this.userUnblock = this.userUnblock.bind(this);
        this.userBlock = this.userBlock.bind(this);
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


    userBlock(id) {
        console.log('block')
        axios.post('http://localhost:4000/block/' + id)
            .then(response => {
                if (response) {
                    return <Redirect to={{ pathname: "/login" }} />;

                }
            })
    }
    userUnblock(id) {
        console.log('unblock')
        axios.post('http://localhost:4000/unblock/' + id)
            .then(response => {
                if (response) {
                    return this.props.history.push("/login");
                }
            })
    }
    checkedAll(event) {
        const allCheckboxCheked = event.target.checked
        var checkboxes = document.getElementsByName('subscription[]')
        if (allCheckboxCheked) {
            for (var i in checkboxes) {
                if (checkboxes[i].checked == false) {
                    checkboxes[i].checked = true;
                }
            }
        } else {
            for (var i in checkboxes) {
                if (checkboxes[i].checked == true) {
                    checkboxes[i].checked = false;
                }
            }
        }
    }

    checkboxId = (id) => {
        console.log(id);
        this.setState({ checkboxId: id })
    }

    handleFormSubmit(id) {
        axios.post('http://localhost:4000/delete/' + id)
            .then(response => {
                if (response) {
                    return this.props.history.push("/login");


                }
            })
            .catch(error => {
                console.log(error.response)
            })
    }
    render() {
        return (
            <div>
                <TablePage state={this.state} handleFormSubmit={this.handleFormSubmit}
                    checkboxId={this.checkboxId} checkedAll={this.checkedAll}
                    userUnblock={this.userUnblock} userBlock={this.userBlock} />
            </div>
        )
    }
}

export default withRouter(Profile);