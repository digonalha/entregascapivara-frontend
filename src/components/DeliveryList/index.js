import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  ListItem,
  RouteButton,
  DeleteButton,
  ButtonsRow,
} from './styles';
import * as DeliveryActions from '../../store/modules/delivery/actions';

function DeliveryList() {
  const dispatch = useDispatch();

  async function removeDelivery(delivery) {
    await dispatch(DeliveryActions.removePending(delivery.id));
  }

  async function generateRoute(delivery) {
    await dispatch(DeliveryActions.selectRoute(delivery));
  }

  const deliveries = useSelector((state) => state.delivery.deliveries);

  return (
    <>
      {deliveries &&
        deliveries.map((del) => (
          <>
            <Container>
              <ListItem key={del.id}>
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
                  <FaTrash />
                </DeleteButton>
              </ButtonsRow>
            </Container>
          </>
        ))}
    </>
  );
}

export default DeliveryList;
