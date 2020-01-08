import React from 'react';
import Proptypes from 'prop-types';
import {PriceCard} from './style';
import {
  PriceInfo,
  PriceCaption,
} from '../../../HotelList/components/HotelCard/styles';

class PriceTag extends React.PureComponent {
  render() {
    const {price} = this.props;

    return (
      <PriceCard>
        <PriceCaption>{'Precio Por noche'}</PriceCaption>
        <PriceInfo>{`ARS $${price}`}</PriceInfo>
      </PriceCard>
    );
  }
}

PriceTag.defaultProps = {
  price: 324234,
};

PriceTag.propTypes = {
  price: Proptypes.number.isRequired,
};

export default PriceTag;
