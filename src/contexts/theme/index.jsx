import { createContext, useReducer } from 'react';
import reducer from './reducer';
import data from './data';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
