import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import HotelCard from './components/HotelCard';
import {SearchBar} from 'react-native-elements';
import styled from 'styled-components';
import {hotels} from './data';

class HotelList extends Component {
  constructor(props) {
    super(props);
    this.state = {search: ''};
  }

  updateSearch = search => {
    this.setState({search});
  };

  getDetail = id => {
    this.props.history.push({pathname: '/detail', state: {id}});
  };

  render() {
    console.log('holaaaaaaa');
    console.log(global.ErrorUtils);
    const {search} = this.state;
    return (
      <View style={{flex: 1}}>
        <SearchBar
          lightTheme
          placeholder="Search an Hotel"
          onChangeText={this.updateSearch}
          value={search}
          // containerStyle={searchBar}
          // inputStyle={searchBar}
        />
        <FlatList
          data={hotels}
          renderItem={({item}) => (
            <HotelCard
              name={item.name}
              qualification={item.qualification}
              price={item.price}
              image={item.image}
              getDetail={this.getDetail}
              id={item.id}
            />
          )}
          keyExtractor={item => item.id}
          // extraData={selected}
        />
      </View>
    );
  }
}

const searchBar = {
  backgroundColor: 'rgba(255, 255, 255, 1)',
};

const icon = {
  type: 'material',
  color: 'rgba(253, 185, 20, 1)',
  name: 'search',
};

export default HotelList;
