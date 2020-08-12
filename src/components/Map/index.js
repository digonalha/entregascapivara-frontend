import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  LoadScript,
  GoogleMap,
  DirectionsRenderer,
  Marker,
} from '@react-google-maps/api';
import { MapWrapper } from './styles';
import * as DeliveryActions from '../../store/modules/delivery/actions';

export default function Map() {
  const [directions, setDirections] = useState(null);
  const [atualPosition, setAtualPosition] = useState(null);
  const dispatch = useDispatch();

  const mapOptions = {
    disableDefaultUI: false,
  };

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

  const setMarker = (pos) => {
    dispatch(DeliveryActions.setMarker(pos));
    setDirections(null);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setAtualPosition({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  }, []);

  const selected = useSelector((state) => state.delivery.selected);
  const position = useSelector((state) => state.delivery.marker);

  useEffect(() => {
    if (selected.id > 0) createRoute(selected);
  }, [selected]);

  return (
    <MapWrapper>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
        <GoogleMap
          mapContainerStyle={{
            height: '100%',
            width: 'auto',
          }}
          center={atualPosition}
          zoom={16}
          options={mapOptions}
          onClick={(e) =>
            setMarker({ lat: e.latLng.lat(), lng: e.latLng.lng() })
          }
        >
          {position && (
            <Marker
              position={position}
              label=""
              onClick={() => setMarker('')}
            />
          )}
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>
    </MapWrapper>
  );
}
