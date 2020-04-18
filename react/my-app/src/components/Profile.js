import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            login: '',
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decode = jwt_decode(token)
        this.setState({
            email: decode.email,
            login: decode.login,
            password: decode.password
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='jumbotron mt-5'>
                    <div className='col-sm-8 mx-auto'>
                        <h1 className='text-center'>Profile</h1>
                    </div>
                    <span><input type='checkbox' value={this.id} name='id' />All</span>
                    <table className='table col-md-6 mx-auto'>
                        <tbody>
                            <tr>
                                <td>Login</td>
                                <td>Password</td>
                                <td>Email</td>
                                <td>Date</td>
                            </tr>
                            <tr>
                                <tr>{this.state.login}</tr>
                            </tr>
                            <tr>
                                <tr>{this.state.password}</tr>
                            </tr>
                            <tr>
                                <tr>{this.state.email}</tr>
                            </tr>
                        </tbody>
                    </table>
                    <input type='checkbox' value={this.id} name='id' />
                </div>
            </div>
        )
    }
}

export default Profile;