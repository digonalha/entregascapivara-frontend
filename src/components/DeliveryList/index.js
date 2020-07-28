import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import {
  ListItem,
  ListWrapper,
  RouteButton,
  DeleteButton,
  ButtonsRow,
} from './styles';
import * as DeliveryActions from '../../store/modules/delivery/actions';

function DeliveryList() {
  const [_, setDelivery] = useState();
  const dispatch = useDispatch();

  async function removeDelivery(del) {
    await dispatch(DeliveryActions.removePending(del.id));
  }

  async function generateRoute(del) {
    await dispatch(DeliveryActions.selectRoute(del));
  }

  const deliveries = useSelector((state) => state.delivery.deliveries);

  return (
    <>
      <ListWrapper>
        {deliveries &&
          deliveries.map((del) => (
            <>
              <ListItem>
                <strong>Cliente:</strong>
                <span>{del.nome_cliente}</span>
                <strong>Data Entrega: </strong>
                <span>{new Date(del.data_entrega).toLocaleDateString()}</span>
                <strong>Partida: </strong>
                <span>{del.ponto_partida}</span>
                <strong>Destino: </strong>
                <span>{del.ponto_destino}</span>
              </ListItem>
              <ButtonsRow>
                <RouteButton onClick={() => generateRoute(del)}>
                  Gerar rota
                </RouteButton>
                <DeleteButton onClick={() => removeDelivery(del)}>
                  <MdDelete />
                </DeleteButton>
              </ButtonsRow>
            </>
          ))}
      </ListWrapper>
    </>
  );
}

export default DeliveryList;
