import React from 'react';
import {addedFeatureAC} from '../actions';
import {connect} from 'react-redux';
const AddedFeature = props => {
  const removeFeature = item => {
    addedFeatureAC(item);
    console.log(item)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=>removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};
const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store,
   
    
  
  }
}

export default connect(mapStateToProps, {addedFeatureAC} )(AddedFeature);




