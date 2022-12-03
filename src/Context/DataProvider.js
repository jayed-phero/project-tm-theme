import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { FATCHING_ERROR, FATCHING_START, FATCHING_SUCCESS } from './States/actionTypes/actionTypes';
import { dataReducer, initialState } from './States/Reducers/DataReducer';

const DataContext = createContext();
const DataProvider = ({children}) => {
    const [state, dispatch] = useReducer(dataReducer, initialState)


    useEffect(() => {
        dispatch({type: FATCHING_START});
        fetch('pro.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            dispatch({type: FATCHING_SUCCESS, payload: data.data})
            .catch((err) => {
                dispatch({type: FATCHING_ERROR})
            })
        })
    }, [])


    const dataInfo = {
        state,
        dispatch,
    }
    return (
        <div>
            <DataContext.Provider value={dataInfo}>
                {children}
            </DataContext.Provider>
        </div>
    );
};

export const useData = () => {
   const context = useContext(DataContext)
   return context;
}
export default DataProvider;