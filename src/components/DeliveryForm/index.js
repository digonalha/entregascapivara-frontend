import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonSubmit, Container } from './styles';
import * as DeliveryActions from '../../store/modules/delivery/actions';
import api from '../../services/api';

function DeliveryForm() {
  const [nomeCliente, setNomeCliente] = useState('');
  const [dataEntrega, setDataEntrega] = useState('');
  const [latIni, setLatIni] = useState('');
  const [lngIni, setLngIni] = useState('');
  const [latEnd, setLatEnd] = useState('');
  const [lngEnd, setLngEnd] = useState('');

  const dispatch = useDispatch();

  const clearForm = () => {
    setNomeCliente('');
    setDataEntrega(new Date().toISOString().slice(0, 10)); // TO-DO: criar método no util
    setLatIni('');
    setLngIni('');
    setLatEnd('');
    setLngEnd('');
  };

  useEffect(() => clearForm(), []);

  async function handleSubmit(e) {
    e.preventDefault();

    await dispatch(
      DeliveryActions.addPending({
        nome_cliente: nomeCliente,
        data_entrega: dataEntrega,
        ponto_partida: `${latIni}, ${lngIni}`,
        ponto_destino: `${latEnd}, ${lngEnd}`,
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
        <label className="label-title">Partida</label>
        <div className="input-group">
          <div className="input-block">
            <label>Latitude</label>
            <input
              type="number"
              id="latIni"
              required
              value={latIni}
              onChange={(e) => setLatIni(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label>Longitude</label>
            <input
              type="number"
              id="lngIni"
              required
              value={lngIni}
              onChange={(e) => setLngIni(e.target.value)}
            />
          </div>
        </div>
        <label className="label-title">Destino</label>
        <div className="input-group">
          <div className="input-block">
            <label>Latitude</label>
            <input
              type="number"
              id="latEnd"
              required
              value={latEnd}
              onChange={(e) => setLatEnd(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label>Longitude</label>
            <input
              type="number"
              id="lngEnd"
              required
              value={lngEnd}
              onChange={(e) => setLngEnd(e.target.value)}
            />
          </div>
        </div>
        <ButtonSubmit>Salvar</ButtonSubmit>
      </form>
    </Container>
  );
}

export default DeliveryForm;
