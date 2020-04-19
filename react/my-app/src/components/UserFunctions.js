import axios from 'axios';


export const register = async data => {
    try {
        const res = await axios.post('http://localhost:4000/register', {
            login: data.login,
            email: data.email,
            password: data.password
        });
        console.log('Registred');
    }
    catch (err) {
        console.log(err);
    }
}

export const login = async data => {
    try {
        const res = await axios.post('http://localhost:4000/login', {
            email: data.email,
            password: data.password
        });
        localStorage.setItem('usertoken', res.data);
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
}

export const usersList = async data => {
    try {
        const response = await axios.get('http://localhost:4000/profile', {
        })
        return response;
    }
    catch (err) {
        console.log(err);
    }
}
