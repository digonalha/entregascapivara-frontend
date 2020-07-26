import React, { useState, useEffect } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from 'react-google-maps';
import { MapWrapper } from './styles';

export const Map = (props) => {
  const [position, setPosition] = useState({});
  const [directions, setDirections] = useState(null);

  const center = async () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition({
        lat: pos.coords.latitude,
        long: pos.coords.longitude,
      });
    });
  };

  const mapOptions = {
    disableDefaultUI: true,
  };

  const createRoute = (delivery) => {
    const { google } = window;

    const latlngIni = delivery.ponto_partida.split(/, ?/);
    const latlngEnd = delivery.ponto_destino.split(/, ?/);

    const waypoints = [
      {
        location: new google.maps.LatLng(latlngIni.shift(), latlngIni.pop()),
      },
      {
        location: new google.maps.LatLng(latlngEnd.shift(), latlngEnd.pop()),
      },
    ];

    const origin = waypoints.shift();
    const destination = waypoints.pop();

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
        waypoints,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
        }
      }
    );
  };

  useEffect(() => {
    center();
    if (props.delivery) createRoute(props.delivery);
  }, []);

  const MyMap = withGoogleMap(() => (
    <GoogleMap
      defaultCenter={{ lat: position.lat, lng: position.long }}
      defaultZoom={16}
      options={mapOptions}
    >
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  ));

  return (
    <MyMap containerElement={<MapWrapper />} mapElement={<MapWrapper />} />
  );
};

export default Map;
