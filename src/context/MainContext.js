import React, {createContext, useReducer} from 'react';
import {mainReducer} from './MainReducer';

const inicialState = {
  products: [],
};

export const MainContext = createContext({});

export const MainProvider = ({children}) => {
  const [state, dispatch] = useReducer(mainReducer, inicialState);

  const addProducts = products => {
    dispatch({type: 'addProducts', payload: products});
  };

  return (
    <MainContext.Provider
      value={{
        ...state,
        addProducts,
      }}>
      {children}
    </MainContext.Provider>
  );
};
