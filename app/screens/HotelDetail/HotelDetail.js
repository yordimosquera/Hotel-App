import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Link} from 'react-router-native';
import HotelIntroduction from './components/HotelIntroduction';
import PriceTag from './components/PriceTag';

class HotelDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      name,
      image,
      price,
      qualification,
    } = this.props.location.state.hotelInfo;

    return (
      <View>
        <HotelIntroduction
          name={name}
          image={image}
          qualification={qualification}
        />
        <PriceTag price={price} />
        <Link to="/hotels" underlayColor="#f0f4f7">
          <Text>{'HotelList!!!'}</Text>
        </Link>
      </View>
    );
  }
}

export default HotelDetail;
