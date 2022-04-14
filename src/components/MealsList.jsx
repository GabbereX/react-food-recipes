import { MealItem } from './MealItem';

export function MealsList({ meals = [] }) {
  return (
    <div className={'card__list'}>
      {meals.length ? (
        meals.map(item => {
          return <MealItem key={item.idMeal} {...item} />;
        })
      ) : (
        <h4 className='not-found'>Nothing found</h4>
      )}
    </div>
  );
}
