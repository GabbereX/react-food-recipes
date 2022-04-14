import { API_URL } from '@config';

const getMealById = id =>
  fetch(API_URL + 'lookup.php?i=' + id).then(data => data.json());

const getAllCategories = () =>
  fetch(API_URL + 'categories.php').then(data => data.json());

const getFilteredCategory = name =>
  fetch(API_URL + 'filter.php?c=' + name).then(data => data.json());

export { getMealById, getAllCategories, getFilteredCategory };
