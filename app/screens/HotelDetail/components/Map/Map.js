import React from 'react';
import Proptypes from 'prop-types';
import MapView, {Marker} from 'react-native-maps';
import styled from 'styled-components';

class Map extends React.PureComponent {
  render() {
    const {
      coordinates: {latitude, longitude},
      name,
    } = this.props;
    const region = {
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    return (
      <MapContainer>
        <MapView
          style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}
          initialRegion={region}>
          <Marker coordinate={region} title={name} />
        </MapView>
      </MapContainer>
    );
  }
}

const MapContainer = styled.View`
  margin-top: 20px;
  width: 500px;
  height: 250px;
  justify-content: flex-end;
  align-items: center;
`;

Map.defaultProps = {
  coordinates: {
    latitude: 37.78825,
    longitude: -122.4324,
  },
  name: 'Houston',
};

Map.propTypes = {
  coordinates: Proptypes.object.isRequired,
  name: Proptypes.string.isRequired,
};

export default Map;
