import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  LoadScript,
  GoogleMap,
  DirectionsRenderer,
  Marker,
} from '@react-google-maps/api';
import { MapWrapper } from './styles';

export default function Map() {
  const [position, setPosition] = useState({});
  const [directions, setDirections] = useState(null);

  const mapOptions = {
    disableDefaultUI: true,
  };

  const selected = useSelector((state) => state.delivery.selected);

  const createRoute = (selDelivery) => {
    const { google } = window;

    const latlngIni = selDelivery.ponto_partida.split(/, ?/);
    const latlngEnd = selDelivery.ponto_destino.split(/, ?/);

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
    if (selected.id > 0) createRoute(selected);
  }, [selected]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition({
        lat: pos.coords.latitude,
        long: pos.coords.longitude,
      });
    });
  }, []);

  const onClick = (event) => {
    return (
      <Marker
        position={{ lat: event.latLng.lat(), lng: event.latLng.lng() }}
        label="S"
      />
    );
  };

  const containerStyle = {
    height: '100vh',
    width: `auto`,
  };

  return (
    <MapWrapper>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={position ? { lat: position.lat, lng: position.long } : null}
          zoom={16}
          options={mapOptions}
          onClick={(e) => onClick(e)}
        >
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>
    </MapWrapper>
  );
}
