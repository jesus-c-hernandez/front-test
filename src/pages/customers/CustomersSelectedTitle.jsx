const ClientSelectedTitle = ({ selectedCustomer }) => {
  let text = selectedCustomer
    ? `${selectedCustomer.customer_name}`
    : 'Selecciona un cliente';

  return (
    <div className="w-1/2 flex">
      <p className="text-xl text-purple-second">Cliente seleccionado:</p>
      <p className="text-xl text-gray-200">{text}</p>
    </div>
  );
};

export default ClientSelectedTitle;
