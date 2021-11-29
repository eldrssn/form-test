import { MIN_ID, MAX_ID } from './constants';

export const getRandomId = (min = MIN_ID, max = MAX_ID) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getUniqId = (ids, min = MIN_ID, max = MAX_ID) => {
  const id = getRandomId(min, max);

  if (!ids.includes(id)) {
    return String(id);
  }

  getUniqId(ids, min, max);
};
