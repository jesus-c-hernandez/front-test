const CustomerRow = ({ customer, selectCustomer }) => {
  return (
    <tr
      className="transition duration-300 ease-in-out hover:bg-neutral-100 border border-gray-200 border-2 dark:hover:bg-purple-main cursor-pointer"
      onClick={() => selectCustomer(customer)}
    >
      <td className="font-semibold text-purple-second px-2 py-2 border border-gray-200">
        {customer.customer_name}
      </td>
      <td className="font-semibold text-purple-second px-2 py-2 border border-gray-200 text-center">
        {customer.customer_status.customer_status_name}
      </td>
      <td className="font-semibold text-purple-second px-2 py-2 border border-gray-200 text-center">
        {customer.is_active}
      </td>
      <td className="font-semibold text-purple-second px-2 py-2 border border-gray-200 text-center">
        {customer.created_at}
      </td>
    </tr>
  );
};

export default CustomerRow;
