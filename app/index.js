import React from 'react';
import {NativeRouter, Route, Link} from 'react-router-native';
import {Text, View} from 'react-native';

import HotelDetail from './screens/HotelDetail';
import HotelList from './screens/HotelList';

import styled from 'styled-components';

const App = () => (
  <NativeRouter>
    <Container>
      {/* <Link to="/hotels" underlayColor="#f0f4f7">
        <Text>{'HotelList'}</Text>
      </Link>
      <Link to="/detail" underlayColor="#f0f4f7">
        <Text>{'Detail'}</Text>
      </Link> */}

      {/* <NavItem to="/hotels" underlayColor="#f0f4f7">
        <Text>{'HotelList'}</Text>
      </NavItem>
      <NavItem to="/detail" underlayColor="#f0f4f7">
        <Text>{'Detail'}</Text>
      </NavItem> */}
    </Container>
    <Route exact path="/" component={HotelList} />
    <Route path="/hotels" component={HotelList} />
    <Route path="/detail" component={HotelDetail} />
  </NativeRouter>
);

const Container = styled.View`
  padding: 2px;
  flex-direction: row;
  justify-content: space-around;
`;

// const NavItem = styled.Link`
//   flex: 1;
//   align-items: center;
//   padding: 10px;
// `;

export default App;
