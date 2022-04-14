import { Link } from 'react-router-dom';

import imageNotFound from '../assets/img/not-found.png';

export function CategoryItem({
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) {
  return (
    <li className='card__item'>
      <img
        className='card__image'
        src={strCategoryThumb}
        onError={e => (e.target.src = imageNotFound)}
        alt={strCategory}
      />
      <div className='card__content'>
        <h3 className='card__title'>{strCategory}</h3>
        <p className='card__description'>
          {strCategoryDescription.length > 100
            ? `${strCategoryDescription.slice(0, 100)}...`
            : strCategoryDescription}
        </p>
        <div className='card__readMore-container'>
          <Link to={`/category/${strCategory}`} className='card__button'>
            Watch category
          </Link>
        </div>
      </div>
    </li>
  );
}
