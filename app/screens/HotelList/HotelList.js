import React, {Component} from 'react';
import {View, StatusBar, FlatList, ActivityIndicator} from 'react-native';
import HotelCard from './components/HotelCard';
import {SearchBar, Header} from 'react-native-elements';
import styled from 'styled-components';

class HotelList extends Component {
  constructor(props) {
    super(props);
    this.state = {search: ''};
  }
  componentDidMount() {
    const {getHotels} = this.props;
    getHotels();
  }

  updateSearch = search => {
    const {searchHotels} = this.props;
    this.setState({search});
    searchHotels(search);
  };

  getDetail = hotelInfo => {
    this.props.history.push({pathname: '/detail', state: {hotelInfo}});
  };

  render() {
    const {hotels, getHotels, error, size} = this.props;
    const {search} = this.state;
    return (
      <View style={{flex: 1}}>
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        <Header
          centerComponent={{
            text: 'HotelsApp',
            style: {
              color: 'rgba(255, 255, 255, 1)',
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}
        />
        <SearchBar
          lightTheme
          placeholder="Search an Hotel"
          onChangeText={this.updateSearch}
          onCancel={getHotels}
          value={search}
          // containerStyle={searchBar}
          // inputStyle={searchBar}
        />
        {error ? (
          <ErrorText>
            {'Lo sentimos no hemos podido encontrar ningún hotel :('}
          </ErrorText>
        ) : size > 0 ? (
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
          />
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
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

const ErrorText = styled.Text`
  font-weight: bold;
  font-size: 15px;
  align-self: center;
  color: rgba(184, 179, 195, 1);
  width: 60%;
`;
export default HotelList;
