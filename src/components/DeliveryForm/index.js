import React, { useState, useEffect } from 'react';
// import "./styles.css";
import { ButtonWrapper, Container } from './styles';
import api from '../../services/api';

function DeliveryForm({ onSubmit }) {
  const [nomeCliente, setNomeCliente] = useState('');
  const [dataEntrega, setDataEntrega] = useState('');
  const [latIni, setLatIni] = useState('');
  const [lngIni, setLngIni] = useState('');
  const [latEnd, setLatEnd] = useState('');
  const [lngEnd, setLngEnd] = useState('');

  useEffect(() => clearForm(), []);

  const clearForm = () => {
    setNomeCliente('');
    setDataEntrega(new Date().toISOString().slice(0, 10)); // TO-DO: criar método no util
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // srry
        setLatIni(latitude);
        setLngIni(longitude);
        setLatEnd(latitude);
        setLngEnd(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await api.post('/delivery', {
      nome_cliente: nomeCliente,
      data_entrega: dataEntrega,
      ponto_partida: `${latIni}, ${lngIni}`,
      ponto_destino: `${latEnd}, ${lngIni}`,
    });

    clearForm();
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label>Cliente</label>
          <input
            name="nomeCliente"
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
            name="dataEntrega"
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
              name="latIni"
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
              name="lngIni"
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
              name="latEnd"
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
              name="lngEnd"
              type="number"
              id="lngEnd"
              required
              value={lngEnd}
              onChange={(e) => setLngEnd(e.target.value)}
            />
          </div>
        </div>
        <ButtonWrapper>
          <button type="submit">Salvar</button>
        </ButtonWrapper>
      </form>
    </Container>
  );
}

export default DeliveryForm;
