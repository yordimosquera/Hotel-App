import {GET_HOTELS, GET_HOTELS_FAIL} from './types';
import {getHotels, searchHotelsByText} from '../../services/hotels';

export function getHotelsInfo() {
  return async dispatch => {
    try {
      const {data} = await getHotels();
      const hotels = data.data.items;
      const size = data.data.size;
      dispatch({type: GET_HOTELS, hotels, size, hotelsList: hotels});
    } catch (error) {
      dispatch({type: GET_HOTELS_FAIL, error: true, size: 0});
    }
  };
}

export function searchHotels(word) {
  return async (dispatch, getState) => {
    const hotelsList = getState().hotelsState.hotelsList;
    const {data} = searchHotelsByText(word, hotelsList);
    const hotels = data.items;
    const size = data.items.length;
    if (size > 0) {
      dispatch({type: GET_HOTELS, hotels, size, hotelsList});
    } else {
      dispatch({type: GET_HOTELS_FAIL, error: true, size: 0});
    }
  };
}
