import React from 'react';
import Proptypes from 'prop-types';
import {Rating} from 'react-native-elements';
import {
  Card,
  Cover,
  Content,
  HotelName,
  PriceCaption,
  PriceInfo,
  Image,
  HotelInfo,
} from './styles';

const HotelCard = ({name, price, image, qualification, getDetail, id}) => {
  return (
    <Card onPress={() => getDetail({name, price, image, qualification, id})}>
      <Cover>
        <Image
          // resizeMode={'contain'}
          source={{
            uri: image,
          }}
        />
      </Cover>
      <Content>
        <HotelInfo>
          <HotelName numberOfLines={1}>{name}</HotelName>
          <PriceCaption>{'Precio por la noche'}</PriceCaption>
        </HotelInfo>
        <HotelInfo>
          <Rating imageSize={20} readonly startingValue={qualification} />
          <PriceInfo>{`ARS $${price}`}</PriceInfo>
        </HotelInfo>
      </Content>
    </Card>
  );
};

export default HotelCard;

HotelCard.defaultProps = {
  name: 'Houston',
  image: 'https://facebook.github.io/react-native/img/tiny_logo.png',
  price: 5000,
  qualification: 5,
  getDetail: () => {},
};

HotelCard.propTypes = {
  id: Proptypes.number,
  name: Proptypes.string.isRequired,
  image: Proptypes.string,
  price: Proptypes.number.isRequired,
  qualification: Proptypes.number.isRequired,
  getDetail: Proptypes.func,
};
