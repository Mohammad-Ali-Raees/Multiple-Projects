import { ACTIONS } from './ActionPost'  


export const reducer = (state, action) => {
    
    if (action.type === ACTIONS.Increament_Value) {
        if (state.counter >= 5) {
            return {
                counter: state.counter = 5
            }
        } else {
            return {
                ...state,
                counter: state.counter + 1
            }
        }

    }

    if (action.type === ACTIONS.Decreament_Value) {
        if (state.counter <= 1) {
            return {
                counter: state.counter = 1
            }
        } else {
            return {
                ...state,
                counter: state.counter - 1
            }
        }

    }

    if(action.type === "CAll_API"){
        return{
            API_DATA:action.payload

        }
    }

    return state;
}