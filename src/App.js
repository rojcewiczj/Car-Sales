import React, {useReducer} from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { initialState, featureReducer} from './reducers/featureReducer';




const App = () => {
  const store = createStore(featureReducer);
 const [state, dispatch] = useReducer (featureReducer, initialState)
  const removeFeature = item => {
    // dispatch an action here to remove an item

  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <Provider store={store}>
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
    </Provider>
  );
};


export default App;
