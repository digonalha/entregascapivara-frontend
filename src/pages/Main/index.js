import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withScriptjs } from 'react-google-maps';
import { MdDelete } from 'react-icons/md';
import DeliveryForm from '../../components/DeliveryForm';
import DeliveryItem from '../../components/DeliveryItem';
import Map from '../../components/Map';
import api from '../../services/api';
import {
  Sidebar,
  FormWrapper,
  ListWrapper,
  MapWrapper,
  RouteButton,
  DeleteButton,
  ButtonsRow,
} from './styles';

import * as DeliveryActions from '../../store/modules/delivery/actions';

export default function Main() {
  const [delivery, setDelivery] = useState(null);
  const dispatch = useDispatch();

  useEffect(async () => {
    const response = await api.get('/delivery');
    console.log(response.data);
    await dispatch(DeliveryActions.storeDeliveries(response.data));
  }, []);

  const MapLoader = withScriptjs(Map);

  async function removeDelivery(del) {
    await dispatch(DeliveryActions.removePending(del.id));
  }

  const deliveries = useSelector((state) => state.delivery.deliveries);
  return (
    <>
      <MapWrapper>
        <Sidebar>
          <FormWrapper>
            <strong className="Title">nova entrega</strong>
            <DeliveryForm />
            <strong className="Footer">minhas entregas</strong>
          </FormWrapper>
          <ListWrapper>
            {deliveries.map((del) => (
              <>
                <DeliveryItem key={del.id} delivery={del} />
                <ButtonsRow>
                  <RouteButton onClick={() => setDelivery(del)}>
                    Gerar rota
                  </RouteButton>
                  <DeleteButton onClick={() => removeDelivery(del)}>
                    <MdDelete />
                  </DeleteButton>
                </ButtonsRow>
              </>
            ))}
          </ListWrapper>
        </Sidebar>
        <MapLoader
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}`}
          loadingElement={<div style={{ height: `100vh`, width: `100vh` }} />}
          delivery={delivery}
        />
      </MapWrapper>
    </>
  );
}
