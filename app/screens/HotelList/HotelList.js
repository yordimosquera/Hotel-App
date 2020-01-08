import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import HotelCard from './components/HotelCard';
import {SearchBar} from 'react-native-elements';
import styled from 'styled-components';

class HotelList extends Component {
  constructor(props) {
    super(props);
    this.state = {search: ''};
  }
  componentDidMount() {
    this.props.getHotels();
  }

  updateSearch = search => {
    this.setState({search});
  };

  getDetail = hotelInfo => {
    this.props.history.push({pathname: '/detail', state: {hotelInfo}});
  };

  render() {
    // console.log(global.ErrorUtils);
    console.log(this.state.search);
    const {hotels} = this.props;
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
              image={'https://image.flaticon.com/icons/png/512/15/15476.png'}
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
