import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className='header'>
      <div className='container header__container'>
        <Link to='/' className='header__logo'>
          React Recipes
        </Link>
        <nav>
          <ul className='header__list'>
            <li className='header__item'>
              <Link to='/' className='header__link'>
                Home
              </Link>
            </li>
            <li className='header__item'>
              <Link to='/about' className='header__link'>
                About
              </Link>
            </li>
            <li className='header__item'>
              <Link to='/contact' className='header__link'>
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
