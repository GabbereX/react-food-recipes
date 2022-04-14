import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { Preload } from '../components/Preload';
import { MealsList } from '../components/MealsList';

export function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const { goBack } = useHistory();

  useEffect(() => {
    getFilteredCategory(name).then(data => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <div className='card__back-container'>
        <button className='card__button card__button-back' onClick={goBack}>
          Go Back
        </button>
      </div>

      {!meals.length ? <Preload /> : <MealsList meals={meals} />}
    </>
  );
}
