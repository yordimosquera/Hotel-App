import styled from 'styled-components';

const Card = styled.TouchableOpacity`
  background: rgba(255, 255, 255, 1);
  height: 200px;
  border-radius: 6px;
  margin: 10px;
  elevation: 5;
`;

const Cover = styled.View`
  width: 100%;
  height: 120px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Content = styled.View`
  padding-left: 10px;
  padding-right: 10px;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
`;

const HotelName = styled.Text`
  color: #3c4560;
  font-size: 18px;
  font-weight: bold;
  flex: 1;
`;

const PriceCaption = styled.Text`
  color: rgba(184, 179, 195, 1);
`;

const PriceInfo = styled.Text`
  color: rgba(253, 185, 20, 1);
  font-size: 20px;
  font-weight: bold;
`;

const HotelInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export {
  Card,
  Cover,
  Image,
  Content,
  PriceCaption,
  PriceInfo,
  HotelName,
  HotelInfo,
};
