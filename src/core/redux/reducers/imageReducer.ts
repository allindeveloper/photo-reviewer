import actionTypes from '../actions/actionTypes';

const initialState =  {
    category:false
}
type DefaultActionParams = {
    type: string,
    payload?: any
}

const imageReducer = (state = initialState, action:DefaultActionParams) : any => {
  
    switch (action.type) {
    case actionTypes.APPROVE_IMAGE:
        return {
          ...state,
          category: action.payload.category,
        };
      
        default:
            return state;
    }
};



export default imageReducer;