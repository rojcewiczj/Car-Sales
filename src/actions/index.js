


export const ADDED_FEATURE = "ADDED_FEATURE";
export const addedFeatureAC = feature => {
    console.log(feature);
    return { type: ADDED_FEATURE }

};

export const ADDITIONAL_FEATURE = "ADDITIONAL_FEATURE";
export const additonalFeatureAC = feature => {
    return {type: ADDITIONAL_FEATURE }
};