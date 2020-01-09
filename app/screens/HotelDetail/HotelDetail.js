import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Link} from 'react-router-native';
import HotelIntroduction from './components/HotelIntroduction';
import PriceTag from './components/PriceTag';
import {Header, Icon} from 'react-native-elements';

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
        <Header
          leftComponent={
            <Link to="/hotels">
              <Icon
                name="arrow-left"
                type="font-awesome"
                color="rgba(255,255,255,1)"
              />
            </Link>
          }
          centerComponent={{
            text: 'HotelsApp',
            style: {
              color: 'rgba(255, 255, 255, 1)',
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}
        />
        <HotelIntroduction
          name={name}
          image={image}
          qualification={qualification}
        />
        <PriceTag price={price} />
      </View>
    );
  }
}

export default HotelDetail;
