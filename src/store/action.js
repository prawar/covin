import axios from "axios"

export const fetchData = (id) => (dispatch, getStore) => {
    if (id) {
        dispatch({type: 'FETCH_SINGLE_REQUEST'})
        let person = null;
        axios.get(`https://reqres.in/api/users/${id}`)
        .then(res=>{
            person = res.data.data;
            console.log(person)
            dispatch({
                type: 'FETCH_SINGLE_SUCCESS',
                person
            })
        }).catch(error=>{
            dispatch({
                type: 'FETCH_SINGLE_FAILURE',
                userErr: error
            })
        })
    }
    else {
        dispatch({ type: 'FETCH_USERS_REQUEST' })
        let result = null;
        axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
                result = res.data.data;
                console.log(result)
                dispatch({
                    type: 'FETCH_USERS_SUCCESS',
                    payload: result
                })
            }).catch(error => {
                dispatch({
                    type: 'FETCH_USERS_FAILURE',
                    error: error
                })
            })
    }
}