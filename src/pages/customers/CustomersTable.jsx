import { useEffect, useState } from 'react';
import CustomersSearch from './CustomersSearch';
import CustomerRow from './CustomerRow';

import { customersApi } from '../../api';
import { NewCustomer } from '../new-costumer';

const CustomersTable = ({ onSelectCustomer }) => {
  const BASE_URL =
    'http://ec2-3-21-100-7.us-east-2.compute.amazonaws.com:8080/api/';

  const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };

  // Setear los hooks useState
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState('');

  // func para traer datos del API
  const getCustomers = async () => {
    const resp = await customersApi.get(`${BASE_URL}customers`);
    formatCustomers(resp.data.data);
  };

  const formatCustomers = (customers) => {
    const dateTimeFormat = new Intl.DateTimeFormat('es-MX', dateOptions);
    const formatedCustomers = customers.map((customer) => {
      return {
        ...customer,
        created_at: dateTimeFormat.format(new Date(customer.created_at)),
        is_active: customer.is_active === 1 ? 'Disponible' : 'Bloquedo',
      };
    });
    setCustomers(formatedCustomers);
  };

  // func de busqueda
  const searchCustomerHandler = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  // func de filtrado
  let results = !search
    ? customers
    : customers.filter((customer) =>
        customer.customer_name.toLowerCase().includes(search)
      );

  const selectCustomerRow = (customer) => {
    onSelectCustomer(customer);
  };

  const saveCustomer = async (customer) => {
    console.log(customer);
    customersApi
      .post(`${BASE_URL}customers`, {
        RFC: customer.RFC,
        customer_name: customer.customer_name,
        customer_status_id: customer.customer_status_id,
        customer_tax_residence: customer.customer_tax_residence,
        is_active: customer.is_active,
      })
      .then((resp) => {
        console.log(resp);
        getCustomers();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <>
      <div className="w-1/2 flex flex-col pr-2">
        <div className="flex flex-row justify-between mb-2">
          <CustomersSearch onSearch={searchCustomerHandler} />
          <NewCustomer onAddCustomer={saveCustomer} />
        </div>
        <table className="min-w-full border rounded-xl text-xs font-light border-2 border-gray-200">
          <thead className="border font-medium bg-gray border-gray-200">
            <tr>
              <th
                scope="col"
                className="border border-2  border-gray-200 py-2 "
              >
                Nombre
              </th>
              <th
                scope="col"
                className="border border-2  border-gray-200 py-2 "
              >
                Estatus
              </th>
              <th scope="col" className="border border-2 border-gray-200 py-2 ">
                Credito
              </th>
              <th
                scope="col"
                className="border border-2  border-gray-200 py-2 "
              >
                Fecha de registro
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map((customer) => (
              <CustomerRow
                key={customer.customer_id}
                customer={customer}
                selectCustomer={selectCustomerRow}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomersTable;
