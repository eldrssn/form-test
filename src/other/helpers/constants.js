export const MIN_ID = 1;
export const MAX_ID = 5000;

export const DEBOUNCE_DELAY = 200;
export const TRACKER_KEY = 'tracker';

export const defaultCard = {
  id: null,
  name: '',
  description: '',
  url: '',
  type: '',
};

export const columns = [
  {
    title: 'Сделать',
    key: 'todo',
  },
  {
    title: 'В процессе',
    key: 'inprogress',
  },
  {
    title: 'Сделано',
    key: 'done',
  },
];
