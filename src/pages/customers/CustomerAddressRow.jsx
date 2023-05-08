const CustomerAddressRow = ({ address }) => {
  return (
    <tr className="border border-gray-200 border-2">
      <td className="font-semibold text-purple-second px-2 py-2 border border-gray-200">
        {address.location_type.location_type_name}
      </td>
      <td className="font-semibold text-purple-second px-2 py-2 border border-gray-200 text-center">
        {address.location_address}
      </td>
      <td className="font-semibold text-purple-second px-2 py-2 border border-gray-200 text-center">
        {address.location_city}
      </td>
      <td className="font-semibold text-purple-second px-2 py-2 border border-gray-200 text-center">
        {address.location_state}
      </td>
      <td className="font-semibold text-purple-second px-2 py-2 border border-gray-200 text-center">
        {address.location_zipcode}
      </td>
      <td className="font-semibold text-purple-second px-2 py-2 border border-gray-200 text-center">
        {address.location_country}
      </td>
    </tr>
  );
};

export default CustomerAddressRow;
