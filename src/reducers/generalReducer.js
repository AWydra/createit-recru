import produce from 'immer';
import normalizeResponse from 'utils/normalizeResponse';

const initialState = {
  response: [],
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RESPONSE':
      return produce(state, (draftState) => {
        draftState.response = normalizeResponse(action.payload);
      });
    default:
      return state;
  }
};

export default generalReducer;
