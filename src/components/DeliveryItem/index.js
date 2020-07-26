import React from 'react';
import { ListItem } from './styles';

function DeliveryItem({ delivery }) {
  return (
    <ListItem>
      <strong>Cliente:</strong>
      <span>{delivery.nome_cliente}</span>
      <strong>Data Entrega: </strong>
      <span>{new Date(delivery.data_entrega).toLocaleDateString()}</span>
      <strong>Partida: </strong>
      <span>{delivery.ponto_partida}</span>
      <strong>Destino: </strong>
      <span>{delivery.ponto_destino}</span>
    </ListItem>
  );
}

export default DeliveryItem;
