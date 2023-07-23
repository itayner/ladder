import * as React from 'react';

const FilterContext = React.createContext();

function reducer(state, action){
    switch(action.type){
        case 'setFilter':
            return action.payload;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}
function FilterProvider({children}){
    const filter = {gender: 'M', sport: 'Pickle Ball', skill: 'Int'};
    const [state, dispatch] = React.useReducer(reducer, filter);
    return (
        <FilterContext.Provider value={{state, dispatch}}>{children}</FilterContext.Provider>
    )
}
function useFilterContext(){
    const context = React.useContext(FilterContext);
    if (context === undefined)
        throw new Error('useCount must be used within a ContentMobProvider');
    return context;
}

export {FilterProvider, useFilterContext}




