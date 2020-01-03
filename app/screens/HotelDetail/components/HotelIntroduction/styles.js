import styled from 'styled-components';

const Card = styled.View`
  background: rgba(255, 255, 255, 1);
  height: 100px;
  width: 250px
  border-radius: 6px;
  elevation:1;
  align-self:center
  align-items: center
  justify-content: space-evenly;
  top: 80%;
  position: absolute
`;

const ImageDetail = styled.ImageBackground`
  height: 270px;
  margin-bottom: 50px;
`;

export {Card, ImageDetail};
