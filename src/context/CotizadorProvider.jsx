import { createContext } from 'react';

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const hola = 'hola mundo';
  const fnHolaMundo = () => {
    console.log('hola mundo desde una funcion');
  };
  return (
    <CotizadorContext.Provider
      value={{
        hola,
        fnHolaMundo,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };
export default CotizadorContext;
