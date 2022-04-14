import { CategoryItem } from './CategoryItem';

export function CategoryList({ catalog = [] }) {
  return (
    <div className={'card__list'}>
      {catalog.length ? (
        catalog.map(item => {
          return <CategoryItem key={item.idCategory} {...item} />;
        })
      ) : (
        <h4 className='not-found'>Nothing found</h4>
      )}
    </div>
  );
}
