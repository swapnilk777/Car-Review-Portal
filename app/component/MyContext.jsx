import { createContext, useState } from 'react';


const MyProvider = ({ children }) => {
  const [value, setValue] = useState('Hello, World!');
  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};