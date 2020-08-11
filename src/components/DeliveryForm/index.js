import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { ButtonSubmit, Container, InputGroup, InputBlock } from './styles';
import * as DeliveryActions from '../../store/modules/delivery/actions';

function DeliveryForm() {
  const [nomeCliente, setNomeCliente] = useState('');
  const [dataEntrega, setDataEntrega] = useState('');
  const [partida, setPartida] = useState('');
  const [destino, setDestino] = useState('');

  const dispatch = useDispatch();

  const clearForm = () => {
    setNomeCliente('');
    setDataEntrega(new Date().toISOString().slice(0, 10));
    setPartida('');
    setDestino('');
  };

  useEffect(() => clearForm(), []);

  const getLatLongDeparture = async () => {
    const { google } = window;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: partida }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const lat = parseFloat(results[0].geometry.location.lat());
        const lng = parseFloat(results[0].geometry.location.lng());

        const latLng = `${lat},${lng}`;
        setPartida(latLng);
        dispatch(DeliveryActions.setMarker({ lat, lng }));
      }
    });
  };

  const getLatLongDestiny = async () => {
    const { google } = window;

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: destino }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const lat = parseFloat(results[0].geometry.location.lat());
        const lng = parseFloat(results[0].geometry.location.lng());

        const latLng = `${lat},${lng}`;
        setDestino(latLng);
        dispatch(DeliveryActions.setMarker({ lat, lng }));
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
      }),
      clearForm()
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
            name="partida"
            id="partida"
            required
            value={partida}
            onChange={(e) => setPartida(e.target.value)}
            onBlur={getLatLongDeparture}
          />
          <FaMapMarkerAlt onClick={getLatLongDeparture} />
        </InputGroup>
      </InputBlock>
      <InputBlock>
        <InputGroup>
          <input
            type="text"
            placeholder="local de destino"
            name="destino"
            id="destino"
            required
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            onBlur={getLatLongDestiny}
          />
          <FaMapMarkerAlt onClick={getLatLongDestiny} />
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
