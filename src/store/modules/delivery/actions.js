export function addPending(delivery) {
  return {
    type: '@delivery/ADD_PENDING',
    delivery,
  };
}
export function addSuccess(delivery) {
  return {
    type: '@delivery/ADD_SUCCESS',
    delivery,
  };
}

export function storeDeliveries(deliveries) {
  return {
    type: '@delivery/STORE_DELIVERIES',
    deliveries,
  };
}

export function setMarker(marker) {
  return {
    type: '@delivery/SET_MARKER',
    marker,
  };
}

export function selectRoute(selected) {
  return {
    type: '@delivery/SELECT_ROUTE',
    selected,
  };
}

export function removePending(id) {
  return {
    type: '@delivery/REMOVE_PENDING',
    id,
  };
}

export function removeSuccess(id) {
  return {
    type: '@delivery/REMOVE_SUCCESS',
    id,
  };
}
