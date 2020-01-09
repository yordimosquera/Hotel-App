import createReducer from '../createReducer';
import {GET_HOTELS, GET_HOTELS_FAIL} from '../actions/types';

export const hotelsState = createReducer(
  {lastUpdated: null, hotels: [], next: true},
  {
    [GET_HOTELS](state, action) {
      return {
        ...state,
        hotels: action.hotels,
        error: false,
        size: action.size,
        lastUpdated: Date.now(),
        hotelsList: action.hotelsList,
      };
    },
    [GET_HOTELS_FAIL](state, action) {
      return {
        ...state,
        error: action.error,
        size: action.size,
      };
    },
  },
);
