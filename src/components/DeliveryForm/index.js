import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { ButtonSubmit, Container, InputGroup, InputBlock } from './styles';
import * as DeliveryActions from '../../store/modules/delivery/actions';

function DeliveryForm() {
  const [nomeCliente, setNomeCliente] = useState('');
  const [dataEntrega, setDataEntrega] = useState('');
  const [partida, setPartida] = useState('');
  const [destino, setDestino] = useState('');

  const dispatch = useDispatch();
  const { google } = window;

  const clearForm = () => {
    setNomeCliente('');
    setDataEntrega(new Date().toISOString().slice(0, 10));
    setPartida('');
    setDestino('');
  };

  useEffect(() => clearForm(), []);

  const getLatLongDeparture = () => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: partida }, function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        const latLng = `${results[0].geometry.location.lat()},${results[0].geometry.location.lng()}`;
        setPartida(latLng);
      }
    });
  };

  const getLatLongDestiny = () => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: destino }, function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        const latLng = `${results[0].geometry.location.lat()},${results[0].geometry.location.lng()}`;
        setDestino(latLng);
      }
    });
  };

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
  }

  return (
    <Container onSubmit={handleSubmit}>
      <InputBlock>
        <input
          id="nomeCliente"
          placeholder="cliente"
          required
          value={nomeCliente}
          onChange={(e) => setNomeCliente(e.target.value)}
        />
      </InputBlock>
      <InputBlock>
        <InputGroup>
          <input
            type="text"
            placeholder="local de partida"
            id="partida"
            required
            value={partida}
            onChange={(e) => setPartida(e.target.value)}
          />
          <FaSearch onClick={getLatLongDeparture} />
        </InputGroup>
      </InputBlock>
      <InputBlock>
        <InputGroup>
          <input
            type="text"
            placeholder="local de destino"
            id="destino"
            required
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          />
          <FaSearch onClick={getLatLongDestiny} />
        </InputGroup>
      </InputBlock>
      <InputBlock>
        <span>Data de entrega</span>
        <input
          type="date"
          id="dataEntrega"
          placeholder="data"
          required
          value={dataEntrega}
          pattern="[A-Za-z]{3}-[0-9]{4}"
          onChange={(e) => setDataEntrega(e.target.value)}
        />
      </InputBlock>
      <ButtonSubmit>Salvar</ButtonSubmit>
    </Container>
  );
}

export default DeliveryForm;
