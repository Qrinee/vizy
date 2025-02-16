import { createContext, useContext } from 'react';

const API_URL = 'http://localhost:5000'; 

const ApiContext = createContext({ apiUrl: API_URL });

export const ApiProvider = ({ children }) => {
  return (
    <ApiContext.Provider value={{ apiUrl: API_URL }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
