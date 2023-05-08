import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="bg-purple-main py-4">
      <ul className="flex flex-row justify-center">
        <li className="text-xl px-4 font-semibold text-purple-second hover:text-gray-200">
          <Link to={'/'}>Clientes</Link>
        </li>
        <li className="text-xl px-4 font-semibold text-purple-second hover:text-gray-200">
          <Link to={'/about-me'}>Sobre mi</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
