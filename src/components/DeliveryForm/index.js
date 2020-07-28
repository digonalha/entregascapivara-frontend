import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonSubmit, Container } from './styles';
import * as DeliveryActions from '../../store/modules/delivery/actions';
import api from '../../services/api';

function DeliveryForm() {
  const [nomeCliente, setNomeCliente] = useState('');
  const [dataEntrega, setDataEntrega] = useState('');
  const [partida, setPartida] = useState('');
  const [destino, setDestino] = useState('');

  const dispatch = useDispatch();

  const clearForm = () => {
    setNomeCliente('');
    setDataEntrega(new Date().toISOString().slice(0, 10)); // TO-DO: criar método no util
    setPartida('');
    setDestino('');
  };

  useEffect(() => clearForm(), []);

  async function handleSubmit(e) {
    e.preventDefault();

    await dispatch(
      DeliveryActions.addPending({
        nome_cliente: nomeCliente,
        data_entrega: dataEntrega,
        ponto_partida: partida,
        ponto_destino: destino,
      })
    );

    clearForm();
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label>Cliente</label>
          <input
            id="nomeCliente"
            required
            value={nomeCliente}
            onChange={(e) => setNomeCliente(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label>Data de entrega</label>
          <input
            type="date"
            id="dataEntrega"
            required
            value={dataEntrega}
            pattern="[A-Za-z]{3}-[0-9]{4}"
            onChange={(e) => setDataEntrega(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label>Partida</label>
          <input
            type="text"
            id="partida"
            required
            value={partida}
            onChange={(e) => setPartida(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label>Destino</label>
          <input
            type="text"
            id="destino"
            required
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          />
        </div>
        <ButtonSubmit>Salvar</ButtonSubmit>
      </form>
    </Container>
  );
}

export default DeliveryForm;
