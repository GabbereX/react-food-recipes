import { Link } from 'react-router-dom';

import imageNotFound from '../assets/img/not-found.png';

export function MealItem({ strMeal, idMeal, strMealThumb }) {
  return (
    <li className='card__item'>
      <img
        className='card__image'
        src={strMealThumb}
        onError={e => (e.target.src = imageNotFound)}
        alt={strMeal}
      />
      <div className='card__content'>
        <h3 className='card__title'>{strMeal}</h3>
        <div className='card__readMore-container'>
          <Link to={`/meal/${idMeal}`} className='card__button'>
            Read more
          </Link>
        </div>
      </div>
    </li>
  );
}
