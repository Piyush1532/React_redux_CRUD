import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../Redux/userSlice';

const Home = () => {
    const users = useSelector((state) => state.users);
const dispatch=useDispatch()
    const handleDelete=(id)=>{
      dispatch(deleteUser({id:id}))
    }
    
    return (
        <div className='container'>
            <h2>CRUD App</h2>
            <Link to="/create" className='btn btn-success my-3'>Create</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((val, index) => (
                        <tr key={index}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>
                                <Link to={`/edit/${val.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                <button className='btn btn-sm btn-danger ms-2' onClick={()=>handleDelete(val.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
