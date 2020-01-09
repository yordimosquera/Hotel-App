import React from 'react';
import {NativeRouter, Route} from 'react-router-native';

import HotelDetail from './screens/HotelDetail';
import HotelList from './screens/HotelList';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './redux/reducers';
import thunkMiddleware from 'redux-thunk';

const enhancer = compose(applyMiddleware(thunkMiddleware));
const store = createStore(Reducers, {}, enhancer);

const App = () => {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <NativeRouter>
        <Route exact path="/" component={HotelList} />
        <Route path="/hotels" component={HotelList} />
        <Route path="/detail" component={HotelDetail} />
      </NativeRouter>
    </Provider>
  );
};

export default App;
