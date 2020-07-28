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
