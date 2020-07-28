import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withScriptjs } from 'react-google-maps';
import DeliveryList from '../../components/DeliveryList';
import DeliveryForm from '../../components/DeliveryForm';
import Map from '../../components/Map';
import api from '../../services/api';
import { Sidebar, FormWrapper, MapWrapper } from './styles';

import * as DeliveryActions from '../../store/modules/delivery/actions';

export default function Main() {
  const dispatch = useDispatch();

  useEffect(async () => {
    const response = await api.get('/delivery');
    await dispatch(DeliveryActions.storeDeliveries(response.data));
  }, []);

  const MapLoader = withScriptjs(Map);

  return (
    <>
      <MapWrapper>
        <Sidebar>
          <FormWrapper>
            <strong className="Title">nova entrega</strong>
            <DeliveryForm />
            <strong className="Footer">minhas entregas</strong>
          </FormWrapper>
          <DeliveryList />
        </Sidebar>
        <MapLoader
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}`}
          loadingElement={<div style={{ height: `100vh`, width: `100vh` }} />}
        />
      </MapWrapper>
    </>
  );
}
