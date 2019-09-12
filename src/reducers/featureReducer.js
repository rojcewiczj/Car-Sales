import { ADDITIONAL_FEATURE, ADDED_FEATURE } from '../actions';

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250}
    ]
  };

  export const featureReducer = (state = initialState, action) => {
   
    switch(action.type) {
    case  ADDITIONAL_FEATURE:
       console.log("additional-feature:", action);
           return {
               ...state,  
               additionalPrice:state.additionalPrice + action.payload.price,
               car: { ...state.car,
                   features: state.car.features.concat(action.payload),
               }
             
           }
           case ADDED_FEATURE:
                console.log("added-feature:", action);
               return {
                     ...state,
               additionalPrice:state.additionalPrice - action.payload.price,
               car:{ ...state.car,
                   features: state.car.features.filter( item =>{
                    if (item.id !== action.payload.id) {
                         return item
                    }
                    else {
                        return !item;
                    }
                  }
               )},
               store:[...state.store, action.payload]
               
               }
   


      default:
         return state;



  }
};

