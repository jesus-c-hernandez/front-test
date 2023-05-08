import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import CustomerAddressRow from './CustomerAddressRow';
import { customersApi } from '../../api';

const CustomersAddressTable = forwardRef(({}, ref) => {
  useImperativeHandle(ref, () => {
    return {
      getAddresses: getAddresses,
    };
  });

  const BASE_URL =
    'http://ec2-3-21-100-7.us-east-2.compute.amazonaws.com:8080/api/';

  // Setear los hooks useState
  const [customerAddresses, setCustomerAddresses] = useState([]);

  // func para traer datos del API
  const getAddresses = async (customer) => {
    const resp = await customersApi.get(
      `${BASE_URL}customer-locations?filters=customer_id,=,${customer.customer_id}`
    );
    setCustomerAddresses(resp.data.data);
  };

  return (
    <div className="w-1/2">
      <div className="mb-4">
        <p className="text-xl font-semibold text-purple-second">Direcciones</p>
      </div>
      <div>
        <table className="min-w-full border rounded-xl text-xs font-light border-2 border-gray-200">
          <thead className="border font-medium bg-gray border-gray-200">
            <tr>
              <th scope="col" className="border-r py-2 ">
                Tipo
              </th>
              <th scope="col" className=" w-1/3 border-r py-2 ">
                Calle
              </th>
              <th scope="col" className="border-r py-2 ">
                Ciudad
              </th>
              <th scope="col" className="border-r py-2 ">
                Estado
              </th>
              <th scope="col" className="w-1/5 border-r py-2 ">
                Codigo postal
              </th>
              <th scope="col" className="border-r py-2 ">
                Pais
              </th>
            </tr>
          </thead>
          <tbody>
            {customerAddresses.map((address) => (
              <CustomerAddressRow
                key={address.customer_location_id}
                address={address}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default CustomersAddressTable;
