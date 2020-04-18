import React, { Component } from 'react';
import { login } from './UserFunctions';
// require('es6-promise').polyfill();
// require('isomorphic-fetch');

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const data = {
            email: this.state.email,
            password: this.state.password
        }
        login(data).then(res => {
            if (res) {
                this.props.history.push('/profile')
            }
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mt-5 mx-auto'>
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
                            <div className='form-group'>
                                <label htmlform='email'>Email address</label>
                                <input type='email'
                                className='form-control'
                                name='email'
                                placeholder='Enter Email'
                                value={this.state.email}
                                onChange={this.onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlform='password'>Password</label>
                                <input type='password'
                                className='form-control'
                                name='password'
                                placeholder='Enter Email'
                                value={this.state.password}
                                onChange={this.onChange}
                                />
                            </div>
                            <button type='submit'
                            className='btn btn-lg btn-primary btn-block'>Sign in</button>
                        </form>
                    </div>
                </div>

            </div>
     )
    }
}

export default Login;