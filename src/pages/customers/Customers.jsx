import { useRef, useState } from 'react';
import { Menu } from '../../components';
import CustomerselectedTitle from './CustomersSelectedTitle';
import CustomersTable from './CustomersTable';
import CustomersAddressTable from './CustomersAddressTable';

const Customers = () => {
  const customerAddresTableChild = useRef();
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const selectCustomerHandler = (customer) => {
    setSelectedCustomer(customer);
    customerAddresTableChild.current.getAddresses(customer);
  };

  return (
    <>
      <Menu />
      <div className="p-2">
        <div className="flex flex-row justify-between mb-4">
          <h1 className="text-4xl text-purple-second">Clientes</h1>
          <CustomerselectedTitle selectedCustomer={selectedCustomer} />
        </div>
        <div className="flex flex-row justify-between gap-4">
          <CustomersTable onSelectCustomer={selectCustomerHandler} />
          <CustomersAddressTable ref={customerAddresTableChild} />
        </div>
      </div>
    </>
  );
};

export default Customers;
