import HotelList from './HotelList';

import {connect} from 'react-redux';
import * as actions from '../../redux/actions/hotels';

const mapStateToProps = state => {
  console.log(state);
  return {
    hotels: state.hotelsState.hotels,
  };
};

export default connect(mapStateToProps, {getHotels: actions.getHotelsInfo})(
  HotelList,
);
