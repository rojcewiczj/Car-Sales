import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {connect} from 'react-redux';
import {additonalFeatureAC} from './actions'



const App = ({car, store, additionalPrice, additonalFeatureAC }) => {
  const removeFeature = item => {

  }
  const addFeature = item => {
    additonalFeatureAC(item);
  console.log(item)
  }
 
  return (
    
    <div className="boxes">
      <div className="box">
        <Header car={car}/>
        <AddedFeatures car={car}/>
      </div>
      <div className="box">
          <AdditionalFeatures store={store} addFeature ={addFeature}/>
        <Total car={car} additionalPrice={additionalPrice}  />
      </div>
    </div>
   
  );
};
const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice,
    additonalFeatureAC: additonalFeatureAC
  }
}

export default connect(mapStateToProps, { additonalFeatureAC})(App);
