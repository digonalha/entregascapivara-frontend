import React, { useState } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

const InfoWindowMap = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Marker
      key={props.index}
      position={{ lat: props.lat, lng: props.lng }}
      label={props.index.toString()}
      onClick={() => setIsOpen(true)}
    >
      {isOpen && (
        <InfoWindow onCloseClick={setIsOpen(false)}>
          <span>Something</span>
        </InfoWindow>
      )}
    </Marker>
  );
};

export default InfoWindowMap;
