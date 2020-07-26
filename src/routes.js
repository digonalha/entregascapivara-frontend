import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MapContainer from './pages/MapContainer';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={MapContainer} />
    </Switch>
  );
}
