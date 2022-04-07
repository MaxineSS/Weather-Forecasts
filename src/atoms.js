import { atom } from 'recoil';

export const forecastState = atom({
  key: 'items',
  default: []
});

export const locationState = atom({
  key: 'location',
  default: {
    key: '',
    city: '',
    state: ''
  }
});