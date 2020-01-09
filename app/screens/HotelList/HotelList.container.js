import HotelList from './HotelList';

import {connect} from 'react-redux';
import * as actions from '../../redux/actions/hotels';

const mapStateToProps = state => {
  return {
    hotels: state.hotelsState.hotels,
    error: state.hotelsState.error,
    size: state.hotelsState.size,
  };
};

export default connect(mapStateToProps, {
  getHotels: actions.getHotelsInfo,
  searchHotels: actions.searchHotels,
})(HotelList);
