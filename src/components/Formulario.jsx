import { Fragment } from 'react';
import { MARCAS, YEARS, PLANES } from '../constants';
import useCotizador from '../hooks/useCotizador';
import Error from './Error';

const Formulario = () => {
  const { datos, handleChangeDatos, error, setError } = useCotizador();
  const { marca, year } = datos;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(datos).includes('')) {
      setError('Todos los campos son obligatorios');
      return;
    }
    setError('');
  };

  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        <div className='my-5'>
          <label className='block mb-3 font-bold text-gray-400 uppercase'>
            Marca
          </label>
          <select
            onChange={(e) => handleChangeDatos(e)}
            className='w-full p-3 bg-white border border-gray-200'
            name='marca'
            value={marca}
          >
            <option value=''>-- Selecciona Marca --</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className='my-5'>
          <label className='block mb-3 font-bold text-gray-400 uppercase'>
            Año
          </label>
          <select
            onChange={(e) => handleChangeDatos(e)}
            className='w-full p-3 bg-white border border-gray-200'
            name='year'
            value={year}
          >
            <option value=''>-- Selecciona Año --</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className='my-5'>
          <label className='block mb-3 font-bold text-gray-400 uppercase'>
            Elige un Plan
          </label>
          <div className='flex gap-3 items-center'>
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label> {plan.nombre}</label>
                <input
                  onChange={(e) => handleChangeDatos(e)}
                  type='radio'
                  name='plan'
                  value={plan.id}
                  className='mr-2'
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type='submit'
          className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold'
          value='Cotizar'
        />
      </form>
    </>
  );
};

export default Formulario;
