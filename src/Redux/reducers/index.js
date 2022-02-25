import * as Actions from '../constants/action-types';

const initialState = {
    notifications: []
  };
  
  const reducer = (state = initialState, action) => {
    switch(action.type) {
      case Actions.SET_NOTIFICATIONS: 
        return {
          ...state,
          notifications: action.payload
        };
      default:
        return state;
    }
  };

  export default reducer;
  