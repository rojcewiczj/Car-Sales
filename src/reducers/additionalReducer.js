import { ADDITIONAL_FEATURE } from '../actions';
import { initialState } from '../initialState';

  export const additionalReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
      case ADDITIONAL_FEATURE:
          return [...state.features,
            {
                id: action.payload.id,
               name: action.payload.name,
               price: action.payload.price,
               selected: false
            }

          ];
          
  }
    return state;
  }
  