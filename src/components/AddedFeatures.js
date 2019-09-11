import React from 'react';

import AddedFeature from './AddedFeature';
import { connect } from 'net';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.featuresOnProps.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};
const mapStateToProps = state => {
 console.log('MSTP State:', state.car.features)
 return { featuresOnProps: state.car.features
 }
}

export default connect(mapStateToProps,{})(AddedFeatures);
