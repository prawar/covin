import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/action';
import './Card.css'
const Card = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const [id, setId] = useState(null);
    // useEffect(() => {
    //     axios.get("https://reqres.in/api/users?page=2")
    //         .then(res => {
    //             console.log(typeof (res.data));
    //             setData(res.data.data)
    //         })
    // }, [])
    console.log(state.users)
    useEffect(() => {
        dispatch(fetchData())
    }, [])
    // useEffect(() => {
    //     const singleUser = () => {
    //         if (id) {
    //             axios.get(`https://reqres.in/api/users/${id}`)
    //                 .then(res => {
    //                     console.log(res.data.data)
    //                     setUser(res.data.data);
    //                 });
    //         }
    //     }
    //     singleUser();
    // }, [id])

    useEffect(() => {
        dispatch(fetchData(id))
    }, [id])

    const handleClick = (e) => {
        console.log(e.target.name, e);
        if (e.target.name) {
            console.log('here')
            setId(e.target.name)
        }
    }
    return (
        <div className='card-body'>
            <div>
                {state.userLoad ?
                    <p>Loading</p>
                    :
                    state.user ?
                        <div className='user-data'>
                            <div className='pic'><img src={state.user.avatar} alt='profile pic' /></div>
                            <div className='info'>
                                <div>Name: {state.user.first_name} {state.user.last_name}</div>
                                <div>email: {state.user.email}</div>
                            </div>
                        </div>
                        :
                        <p>Please click a button</p>
                }
                {state.loading
                    ?
                    <p>loading</p>
                    :
                    <div onClick={handleClick} className='users'>
                        {state.users?.map(user =>
                            <button
                                name={user.id}
                                key={user.id}
                            >
                                {user.id}
                            </button>
                        )}
                    </div>}
            </div>
        </div>
    )
}

export default Card