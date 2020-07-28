import produce from 'immer';

const initialState = {
  deliveries: [],
};

export default function delivery(state = initialState, action) {
  switch (action.type) {
    case '@delivery/ADD_SUCCESS':
      return produce(state, (draft) => {
        draft.deliveries.push(action.delivery);
      });
    case '@delivery/STORE_DELIVERIES':
      return produce(state, (draft) => {
        draft.deliveries = action.deliveries;
      });
    case '@delivery/REMOVE_SUCCESS':
      return produce(state, (draft) => {
        const delIndex = draft.deliveries.findIndex((p) => p.id === action.id);
        if (delIndex >= 0) {
          draft.deliveries.splice(delIndex, 1);
        }
      });
    default:
      return state;
  }
}
