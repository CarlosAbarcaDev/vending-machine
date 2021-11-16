import {
    ORDER_REQUEST_INIT,
    ORDER_REQUEST_SUCCESS,
    ORDER_REQUEST_ERROR
} from '../../Types'

const initialState = {
    order: [],
    loading: false,
    error: false
}

const orderReducers = (state = initialState, action) =>{

    switch (action.type) {
        case ORDER_REQUEST_INIT:
            return{
                ...state,
                loading: action.payload
            }
        case ORDER_REQUEST_SUCCESS:
            return{
                ...state,
                loading: false,
                error: false,
                order:[...state.order, action.payload]
            }
        case ORDER_REQUEST_ERROR:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
    
        default:
            return state;
    }
}

export default orderReducers