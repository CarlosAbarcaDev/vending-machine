import {
    GET_FOOD_INIT,
    GET_FOOD_SUCCESS,
    GET_FOOD_ERROR
} from '../../Types'

const initialState = {
    food: [],
    loading: false,
    error: false
}

const foodReducers = (state = initialState, action) =>{

    switch (action.type) {
        case GET_FOOD_INIT:
            return{
                ...state,
                loading: action.payload
            }
        case GET_FOOD_SUCCESS:
            return{
                ...state,
                loading: false,
                error: false,
                food: action.payload
            }
        case GET_FOOD_ERROR:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
    
        default:
            return state;
    }
}

export default foodReducers