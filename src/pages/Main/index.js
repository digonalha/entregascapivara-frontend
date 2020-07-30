import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DeliveryList from '../../components/DeliveryList';
import DeliveryForm from '../../components/DeliveryForm';
import Map from '../../components/Map';
import api from '../../services/api';
import { Sidebar, FormWrapper, MapWrapper } from './styles';

import * as DeliveryActions from '../../store/modules/delivery/actions';

export default function Main() {
  const dispatch = useDispatch();

  useEffect(async () => {
    async function fetchData() {
      const response = await api.get('/delivery');
      await dispatch(DeliveryActions.storeDeliveries(response.data));
    }

    fetchData();
  }, []);

  return (
    <>
      <MapWrapper>
        <Sidebar>
          <FormWrapper>
            <h1>nova entrega</h1>
            <DeliveryForm />
            <h1>minhas entregas</h1>
          </FormWrapper>
          <DeliveryList />
        </Sidebar>
        <Map />
      </MapWrapper>
    </>
  );
}
