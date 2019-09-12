


export const ADDED_FEATURE = "ADDED_FEATURE";
export const addedFeatureAC = feature => {
    console.log(feature);
    return {type: ADDED_FEATURE, payload: feature }

};

export const ADDITIONAL_FEATURE = "ADDITIONAL_FEATURE";

export const additonalFeatureAC = feature => {
    console.log(feature)
    return {type: ADDITIONAL_FEATURE, payload: feature }
 
};