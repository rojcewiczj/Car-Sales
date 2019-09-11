import { ADDITIONAL_FEATURE } from '../actions';
import { formatResultsErrors } from 'jest-message-util';

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500, selected: false },
      { id: 2, name: 'Racing detail package', price: 1500, selected: false },
      { id: 3, name: 'Premium sound system', price: 500, selected: false },
      { id: 4, name: 'Rear spoiler', price: 250, selected: false }
    ]
  };

  export const addedReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
      case ADDED_FEATURE:
        let RemoveFeature = state.features.filter(feature =>{
          if (feature.selected === true) {
            return !features.selected;
          }
          else {
            return feature;
          }
        })
        return RemoveFeature;
        
    }
    return state;
  }

  