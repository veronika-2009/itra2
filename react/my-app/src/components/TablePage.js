import React from 'react';
import trash from '../img/trash.png';
import block from '../img/block.png';
import unblock from '../img/lock.png';
import './TablePage.css';

const TablePage = (props) => {
  const users= Object.values(props.state.data)
    return (
     
        <form>
            <div className="col-md-4 offset-md-10">
                <img src={trash} alt='trash'></img>
                <img src={block} alt='trash'></img>
                <img src={unblock} alt='trash'></img>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>All</th>
                        <th><input type="checkbox" name="all" /></th>
                        <th>Id</th>
                        <th>Login</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Date register</th>
                        <th>Date connection</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {users.map((user) =>
        <tr key={user.id} > 
                    <th><input type="checkbox" /></th>
                        <td>{user.id}</td>
                        <td>{user.login}</td>
                        <td>{user.password}</td>
                        <td>{user.email}</td>
                        <td>{user.date_reg}</td>
                        <td>{user.date_author}</td>
                        <td>{user.status}</td>
                        </tr>
       )} 
                       
                    

                </tbody>
            </table>

        </form>
    )


};

export default TablePage;