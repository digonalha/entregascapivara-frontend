import React, { useState, useEffect } from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import { config } from 'dotenv';
import DeliveryForm from '../../components/DeliveryForm';
import DeliveryItem from '../../components/DeliveryItem';
import RouteRenderer from '../../components/RouteRenderer';
import api from '../../services/api';
import { Sidebar, FormWrapper, ListWrapper } from './styles';

export const MapContainer = () => {
  const { google } = window;
  const [position, setPosition] = useState({});
  const [list, setList] = useState([]);
  const [delivery, setDelivery] = useState(null);

  const center = async () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition({
        lat: pos.coords.latitude,
        long: pos.coords.longitude,
      });
    });

    const response = await api.get('/delivery');
    setList(response.data);
  };

  useEffect(() => {
    center();
  }, []);

  console.log(process.env.API_KEY);

  return (
    <>
      <Sidebar>
        <FormWrapper>
          <strong className="Title">nova entrega</strong>
          <DeliveryForm />
          <strong className="Footer">minhas entregas</strong>
        </FormWrapper>
        <ListWrapper>
          {list.map((del) => (
            <>
              <DeliveryItem key={del.id} delivery={del} />
              <button type="button" onClick={() => setDelivery(del)}>
                Rota
              </button>
            </>
          ))}
        </ListWrapper>
      </Sidebar>
      <Map
        google={google}
        zoom={15}
        center={{ lat: position.lat, lng: position.long }}
        disableDefaultUI
      >
        {delivery && <RouteRenderer delivery={delivery} />}
      </Map>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.API_KEY,
})(MapContainer);
