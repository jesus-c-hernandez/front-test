import { useEffect, useState } from 'react';

import { customersApi } from '../../api';

const CustomerForm = ({ onSaveCustomer, onHideAddCustomer }) => {
  const BASE_URL =
    'http://ec2-3-21-100-7.us-east-2.compute.amazonaws.com:8080/api/';

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [locations, setLocations] = useState([]);

  // User data
  const [enteredName, setEnteredName] = useState('');
  const [enteredCountry, setEnteredCountry] = useState('');
  const [enteredState, setEnteredState] = useState('');
  const [enteredCP, setEnteredCP] = useState('');
  const [enteredSaN, setEnteredSaN] = useState('');
  const [enteredTypeLocation, setEnteredTypeLocation] = useState('');
  const [enteredActive, setEnteredActive] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  // Data Handler
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const typeLocationChangeHandler = (event) => {
    setEnteredTypeLocation(event.target.value);
  };

  const stateChangeHandler = (event) => {
    setEnteredState(event.target.value);
  };

  const cpChangeHandler = (event) => {
    setEnteredCP(event.target.value);
  };

  const canChangeHandler = (event) => {
    setEnteredSaN(event.target.value);
  };

  const activeChangeHAndler = () => {
    setEnteredActive(!enteredActive);
  };

  const onHandleChangeCountry = (event) => {
    const countryId = event.target.value;
    setEnteredCountry(countryId);
    getStates(countryId);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setIsSubmited(true);

    if (enteredName === '') {
      setIsFormValid(false);
      return;
    }

    if (!enteredCountry) {
      setIsFormValid(false);
      return;
    }

    if (!enteredState) {
      setIsFormValid(false);
      return;
    }

    if (enteredCP === '') {
      setIsFormValid(false);
      return;
    }

    if (enteredSaN === '') {
      setIsFormValid(false);
      return;
    }

    if (!enteredTypeLocation) {
      setIsFormValid(false);
      return;
    }

    // {
    //   "customer_name": "Test Cliente",
    //   "customer_tax_residence": "Test Street 1",
    //   "RFC": "RFC1234567890",
    //   "customer_status_id": 1,
    //   "is_active": true
    // }

    const customerData = {
      customer_name: enteredName,
      customer_tax_residence: enteredSaN,
      RFC: getRFC(),
      customer_status_id: 1,
      is_active: enteredActive,
    };

    onSaveCustomer(customerData);
  };

  const getRFC = () => {
    const codeName = enteredName.slice(0, 4).toLocaleUpperCase();
    const { country_key } = countries.find(
      (country) => country.country_id === +enteredCountry
    );
    const { state_key } = states.find(
      (state) => state.state_id === +enteredState
    );

    const randNum = Math.floor(Math.random() * 1000);
    return `${codeName}${country_key}${state_key}${randNum}`;
  };

  // GET data
  const getCountries = async () => {
    const resp = await customersApi.get(`${BASE_URL}countries`);
    setCountries(resp.data.data);
  };

  const getStates = async (countryId) => {
    const resp = await customersApi.get(
      `${BASE_URL}states?filters=country_id,=,${countryId}`
    );
    setStates(resp.data.data);
  };

  const getTypeLocations = async () => {
    const resp = await customersApi.get(`${BASE_URL}location-types`);
    setLocations(resp.data.data);
  };

  useEffect(() => {
    getCountries();
    getTypeLocations();
  }, []);

  return (
    <div className="rounded-lg bg-white p-6 drop-shadow-xl mt-40 mx-60">
      <p className="text-purple-second font-semibold text-xl mb-4">
        Agregar cliente
      </p>
      <form onSubmit={submitHandler}>
        <div className="flex">
          <div className="w-full">
            <div className="flex flex-col mb-4 w-1/2">
              <label
                htmlFor=""
                className="font-semibold text-sm mb-1 text-g-second"
              >
                Nombre del cliente
              </label>
              <input
                type="text"
                placeholder="Nombre"
                value={enteredName}
                onChange={nameChangeHandler}
                className="bg-gray rounded-md w-full py-2 pl-3 text-sm focus:outline-none focus:ring focus:ring-violet-300"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor=""
                className="font-semibold text-sm mb-1 text-g-second"
              >
                Agrega una dirección
              </label>
              <div className="flex gap-2">
                <div className="flex flex-col w-1/4">
                  <label
                    htmlFor=""
                    className="font-semibold text-sm mb-1 text-gray-200"
                  >
                    País
                  </label>
                  <select
                    onChange={onHandleChangeCountry}
                    className="bg-gray rounded-md py-2 pl-3 text-sm focus:outline-none focus:ring focus:ring-violet-300"
                  >
                    {countries.map((country) => (
                      <option
                        key={country.country_id}
                        value={country.country_id}
                      >
                        {country.country_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col w-1/4">
                  <label
                    htmlFor=""
                    className="font-semibold text-sm mb-1 text-gray-200"
                  >
                    Estado
                  </label>
                  <select
                    onChange={stateChangeHandler}
                    className="bg-gray rounded-md py-2 pl-3 text-sm focus:outline-none focus:ring focus:ring-violet-300"
                  >
                    {states.map((state) => (
                      <option key={state.state_id} value={state.state_id}>
                        {state.state_name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* <div className="flex flex-col w-1/4">
                  <label
                    htmlFor=""
                    className="font-semibold text-sm mb-1 text-gray-200"
                  >
                    Ciudad
                  </label>
                  <select className="bg-gray rounded-md py-2 pl-3 text-sm focus:outline-none focus:ring focus:ring-violet-300">
                    {countries.map((country) => (
                      <option value="1">{country.country_name}</option>
                    ))}
                  </select>
                </div> */}
                <div className="flex flex-col w-1/4">
                  <label
                    htmlFor=""
                    className="font-semibold text-sm mb-1 text-gray-200"
                  >
                    CP
                  </label>
                  <input
                    type="text"
                    placeholder="12825"
                    value={enteredCP}
                    onChange={cpChangeHandler}
                    className="bg-gray rounded-md py-2 pl-3 text-sm focus:outline-none focus:ring focus:ring-violet-300"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <input
                type="text"
                placeholder="Calle y numero"
                value={enteredSaN}
                onChange={canChangeHandler}
                className="bg-gray rounded-md w-1/2 py-2 pl-3 text-sm focus:outline-none focus:ring focus:ring-violet-300"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor=""
                className="font-semibold text-sm mb-1 text-g-second"
              >
                Selecciona el tipo de dirección
              </label>
              <div className="flex mb-4">
                <select
                  onChange={typeLocationChangeHandler}
                  className="bg-gray rounded-md w-1/4 py-2 pl-3 text-sm focus:outline-none focus:ring focus:ring-violet-300"
                >
                  {locations.map((location) => (
                    <option
                      key={location.location_type_id}
                      value={location.location_type_id}
                    >
                      {location.location_type_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex content-center	gap-2">
                <input
                  type="checkbox"
                  value={enteredActive}
                  onChange={activeChangeHAndler}
                  className="accent-green-400 w-5"
                />
                <label
                  htmlFor=""
                  className="font-semibold text-sm text-g-second"
                >
                  Habilitar
                </label>
              </div>
              {!isFormValid && isSubmited && (
                <p className="text-center text-sm text-red-500 font-semibold">
                  Datos faltantes
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button
            className="inline-block rounded-lg text-xs text-purple-second font-semibold bg-purple-main px-10 py-2 hover:bg-indigo-200"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={onHideAddCustomer}
          >
            CANCELAR
          </button>
          <button
            type="submit"
            className="inline-block rounded-lg text-xs text-white font-semibold bg-purple-second px-10 py-2 hover:bg-indigo-200"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            GUARDAR REGISTRO
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
