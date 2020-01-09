import React, {Component} from 'react';
import {View} from 'react-native';
import {Link} from 'react-router-native';
import HotelIntroduction from './components/HotelIntroduction';
import PriceTag from './components/PriceTag';
import Map from './components/Map';
import {Header, Icon} from 'react-native-elements';
import {navbar} from '../HotelList/styles';

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
      position,
    } = this.props.location.state.hotelInfo;

    return (
      <View style={{flex: 1}}>
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
            style: navbar,
          }}
        />
        <HotelIntroduction
          name={name}
          image={image}
          qualification={qualification}
        />
        <PriceTag price={price} />
        <Map coordinates={position} name={name} />
      </View>
    );
  }
}

export default HotelDetail;
