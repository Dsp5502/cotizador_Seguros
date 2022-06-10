import { createContext, useState } from 'react';
import {
  calcularMarca,
  calcularPlan,
  formatearResultado,
  obtenerDiferenciaYear,
} from '../helpers';

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: '',
  });
  const [error, setError] = useState('');
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);

  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizarSeguros = () => {
    let resultado = 2000;
    const diferencia = obtenerDiferenciaYear(datos.year);
    resultado -= (diferencia * 3 * resultado) / 100;
    resultado *= calcularMarca(datos.marca);
    resultado *= calcularPlan(datos.plan);
    resultado = formatearResultado(resultado);
    setCargando(true);
    setTimeout(() => {
      setResultado(resultado);
      setCargando(false);
    }, 3000);

    return resultado;
  };
  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguros,
        resultado,
        cargando,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };
export default CotizadorContext;
