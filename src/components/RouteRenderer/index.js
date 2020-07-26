import React, { useState, useEffect } from 'react';
import { DirectionsRenderer } from 'google-maps-react';

const RouteRenderer = (props) => {
  const [directions, setDirections] = useState([]);

  useEffect(() => {
    const { google } = window;
    console.log(props.delivery);

    const latlngIni = props.delivery.ponto_partida.split(/, ?/);
    const latlngEnd = props.delivery.ponto_destino.split(/, ?/);

    setDirections(latlngIni);

    const waypoints = directions.map((p) => ({
      location: { lat: p.latitude, lng: p.longitude },
      stopover: true,
    }));

    const origin = waypoints.shift().location;
    const destination = waypoints.pop().location;

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
  }, []);

  return <DirectionsRenderer directions={directions} />;
};

export default RouteRenderer;
