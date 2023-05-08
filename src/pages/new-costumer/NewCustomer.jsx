import { useState } from 'react';
import CustomerForm from './CustomerForm';

const NewCustomer = ({ onAddCustomer }) => {
  const [customerFormContent, setCustomerFormContent] = useState(false);

  const savedCostumerDataHandler = (costumerData) => {
    onAddCustomer(costumerData);
    hideAddCustomer();
  };

  const showAddCustomer = () => {
    setCustomerFormContent(true);
  };

  const hideAddCustomer = () => {
    setCustomerFormContent(false);
  };

  return (
    <>
      {!customerFormContent && (
        <button
          className="rounded-md text-xs text-slate-50 bg-purple-second px-10 hover:bg-indigo-200"
          onClick={showAddCustomer}
        >
          AGREGAR CLIENTE
        </button>
      )}
      {customerFormContent && (
        <div className="absolute inset-y-0 inset-x-0 bg-gray-transparent">
          <CustomerForm
            onSaveCustomer={savedCostumerDataHandler}
            onHideAddCustomer={hideAddCustomer}
          />
        </div>
      )}
    </>
  );
};

export default NewCustomer;
