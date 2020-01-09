import React, {Component} from 'react';
import {View, StatusBar, FlatList} from 'react-native';
import HotelCard from './components/HotelCard';
import {SearchBar, Header} from 'react-native-elements';
import styled from 'styled-components';
import {navbar} from './styles';

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
        <StatusBar translucent backgroundColor="transparent" />
        <Header
          centerComponent={{
            text: 'HotelsApp',
            style: navbar,
          }}
        />
        <SearchBar
          lightTheme
          placeholder="Search an Hotel"
          onChangeText={this.updateSearch}
          onCancel={getHotels}
          value={search}
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
                position={item.position}
                id={item._id}
              />
            )}
            keyExtractor={item => item._id}
          />
        ) : (
          <HotelsIndicator size="large" color="rgba(253, 185, 20, 1)" />
        )}
      </View>
    );
  }
}

const ErrorText = styled.Text`
  margin-top: 230px;
  font-weight: bold;
  font-size: 18px;
  align-self: center;
  color: rgba(184, 179, 195, 1);
  width: 90%;
`;

const HotelsIndicator = styled.ActivityIndicator`
  margin-top: 300px;
`;

export default HotelList;
