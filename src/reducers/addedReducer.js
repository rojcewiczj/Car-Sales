import { ADDED_FEATURE } from '../actions';
import { initialState } from '../initialState';

  export const addedReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
      case ADDED_FEATURE:
        let RemoveFeature = state.features.filter(feature =>{
          if (feature.selected === true) {
            return !feature.selected;
          }
          else {
            return feature;
          }
        })
        return RemoveFeature;
        
    }
    return state;
  }

  