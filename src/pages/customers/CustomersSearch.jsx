const ClientsSearch = ({ onSearch }) => {
  return (
    <div className="w-1/2">
      <input
        className="bg-gray rounded-md w-full py-2 pl-3 text-sm focus:outline-none focus:ring focus:ring-violet-300"
        placeholder="Buscar clientes"
        type="text"
        name="search"
        onChange={onSearch}
      />
    </div>
  );
};

export default ClientsSearch;
