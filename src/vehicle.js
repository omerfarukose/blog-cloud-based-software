import React from 'react';	
 
function reducer(state = {index: 0}, action){ 
    return action.index
}
 
export default reducer;