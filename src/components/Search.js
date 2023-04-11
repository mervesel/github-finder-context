import React,{useContext, useState} from 'react'
import { UsersContext } from './../contexts/usersContext';
import { AlertContext } from '../contexts/alertContext';

const Search =()=> {
    const [keyword,setKeyword]=useState('');
    
    const {searchUsers,users,clearUsers}=useContext(UsersContext);
    const {displayAlert}=useContext(AlertContext);

    const onChange=(e)=>{
      setKeyword(e.target.value)
       
    }

    const onSubmit=(e)=>{
      e.preventDefault();
      if(keyword===''){
        displayAlert('Anahtar kelime giriniz.','danger');
      }else{
        searchUsers(keyword);
        setKeyword('');
      }  
    }

    return (
      <div className='container my-3'>
        <form onSubmit={onSubmit}>
            <div className='input-group'>
                <input onChange={onChange} type="text" className='form-control' placeholder="Anahtar Kelime" value={keyword} />
                <button type="submit" className='btn btn-primary'>Ara</button>
            </div>
        </form>
        {
          users.length > 0  && <button onClick={clearUsers} className='btn btn-outline-danger mt-2 btn-block'>Sonuçları Temizle</button>
        }
        
      </div>
    )
}

export default Search