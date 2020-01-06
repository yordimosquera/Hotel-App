import {GET_HOTELS, GET_HOTELS_FAIL} from './types';
import {getHotels} from '../../services/hotels';

export function getHotelsInfo(error) {
  return async (dispatch, getState) => {
    if (error) {
      dispatch({type: GET_HOTELS_FAIL, error});
    }
    const {data} = await getHotels();
    dispatch({type: GET_HOTELS, data});
  };
}
