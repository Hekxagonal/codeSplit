import { createContext, useReducer } from 'react';
import reducer from './reducer';
import data from './data';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
