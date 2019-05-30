
export default (state=[], action) => {
    if (action.type === 'FETCH_COMMENTS') {
        return [...state, action.payload];
    }   
    return state;
};