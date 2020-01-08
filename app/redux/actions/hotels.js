import {GET_HOTELS, GET_HOTELS_FAIL} from './types';
import {getHotels} from '../../services/hotels';

export function getHotelsInfo() {
  return async (dispatch, getState) => {
    try {
      const {data} = await getHotels();
      dispatch({type: GET_HOTELS, data});
    } catch (error) {
      dispatch({type: GET_HOTELS_FAIL, error});
    }
  };
}
