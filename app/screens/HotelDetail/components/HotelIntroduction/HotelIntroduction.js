import React from 'react';
import Proptypes from 'prop-types';
import {Card, ImageDetail} from './styles';
import {HotelName} from '../../../HotelList/components/HotelCard/styles';
import {Rating} from 'react-native-elements';

class HotelIntroduction extends React.PureComponent {
  render() {
    const {name, qualification, image} = this.props;

    return (
      <ImageDetail
        source={{
          uri: image,
        }}>
        <Card>
          <HotelName isDetail={true}>{name}</HotelName>
          <Rating imageSize={20} readonly startingValue={qualification} />
        </Card>
      </ImageDetail>
    );
  }
}

HotelIntroduction.defaultProps = {
  name: 'Houston',
  qualification: 5,
};

HotelIntroduction.propTypes = {
  name: Proptypes.string.isRequired,
  qualification: Proptypes.number.isRequired,
};

export default HotelIntroduction;
