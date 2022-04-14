import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../api';
import { Preload } from '../components/Preload';

export function Recipe() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const { goBack } = useHistory();
  const {
    idMeal,
    strMealThumb,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strYoutube,
  } = recipe;

  useEffect(() => {
    getMealById(id).then(data => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      {!idMeal ? (
        <Preload />
      ) : (
        <div className='recipe'>
          <div className='card__back-container'>
            <button className='card__button card__button-back' onClick={goBack}>
              Go Back
            </button>
          </div>

          <h2 className='recipe__title'>{strMeal}</h2>
          <img className='recipe__image' src={strMealThumb} alt={strMeal} />
          <div className='recipe__info'>
            <h6>Category: {strCategory}</h6>
            {strArea && <h6>Country: {strArea}</h6>}

          </div>
          <p className='recipe__description'>{strInstructions}</p>

          <table className='recipe__table'>
            <thead className='recipe__table-head'>
              <tr className='recipe__table-head-container'>
                <th className='recipe__table-head-item'>Ingredient</th>
                <th className='recipe__table-head-item'>Measure</th>
              </tr>
            </thead>
            <tbody className='recipe__table-body'>
              {Object.keys(recipe).map(key => {
                if (key.includes('Ingredient') && recipe[key]) {
                  return (
                    <tr className='recipe__table-body-container' key={key}>
                      <td className='recipe__table-body-item'>{recipe[key]}</td>
                      <td className='recipe__table-body-item'>
                        {recipe[`strMeasure${key.slice(13)}`]}
                      </td>
                    </tr>
                  );
                }

                return null;
              })}
            </tbody>
          </table>

          {strYoutube ? (
            <div className='recipe__video-container'>
              <h5 className='recipe__video-title'>Vide Recipe</h5>
              <iframe
                className='recipe__video'
                title={id}
                src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
                allowFullScreen
              />
            </div>
          ) : null}

          <div className='card__back-container'>
            <button className='card__button card__button-back' onClick={goBack}>
              Go Back
            </button>
          </div>
        </div>
      )}
    </>
  );
}
