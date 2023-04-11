import React, { useContext } from 'react';
import Loading from './Loading';
import User from './User';
import { UsersContext } from '../contexts/usersContext';

const UserList =()=>{
    const {loading,users}=useContext(UsersContext);

    if(loading){
         return <Loading />
     }
    return (
        <div className='container mt-3'>
           { users.map((user,index)=> (<User user={user} key={index}/>))}
        </div>
     )
}

export default UserList