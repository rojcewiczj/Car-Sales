import React from 'react';

const AdditionalFeature = props => {
  console.log(props.feature)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick ={() => props.addFeature(props.key)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
