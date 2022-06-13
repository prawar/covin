const initialstate = {
    users: [],
    loading: false,
    error: null,
    userLoad: false,
    userErr: null,
    user: null
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'FETCH_USERS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'FETCH_USERS_SUCCESS':
            return {
                ...state,
                loading: false,
                users: action.payload
            };
        case 'FETCH_USERS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case 'FETCH_SINGLE_REQUEST':
            return {
                ...state,
                userLoad: true
            }
        case 'FETCH_SINGLE_SUCCESS':
            return {
                ...state,
                userLoad: false,
                user: action.person
            }
        case 'FETCH_SINGLE_FAILURE':
            return {
                ...state,
                userLoad: false,
                userErr: action.error
            }
        default:
            return state;
    }
}

export default reducer;