import styled from 'styled-components';

const Card = styled.TouchableOpacity`
  background: rgba(255, 255, 255, 1);
  height: 200px;
  border-radius: 6px;
  margin: 10px;
  elevation: 5;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const Cover = styled.View`
  width: 100%;
  height: 130px;
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
  color: rgba(60, 69, 96, 1);
  font-size: 18px;
  font-weight: bold;
  width: 60%;
`;

const PriceCaption = styled.Text`
  color: ${props =>
    props.isDetail ? 'rgba(255, 255, 255, 1)' : 'rgba(184, 179, 195, 1)'};
  margin-left: 20px;
`;

const PriceInfo = styled.Text`
  color: ${props =>
    props.isDetail ? 'rgba(255, 255, 255, 1)' : 'rgba(253, 185, 20, 1)'};
  font-size: 20px;
  font-weight: bold;
`;

const HotelInfo = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: space-between;
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
