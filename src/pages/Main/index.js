import React, { useState, useEffect } from 'react';
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

export default function Main() {
  const [list, setList] = useState([]);
  const [delivery, setDelivery] = useState(null);

  useEffect(async () => {
    const response = await api.get('/delivery');
    setList(response.data);
  }, []);

  const MapLoader = withScriptjs(Map);

  const removeDelivery = async (del) => {
    const response = await api.delete(`/delivery/${del.id}`);
    if (response) setList(list.filter((item) => item.id !== del.id));
  };

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
            {list.map((del) => (
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