import * as types from './actions';

interface iState {
  theme: string;
}

interface iAction {
  type: string;
  payload?: object;
}

const reducer = (state: iState, action: iAction) => {
  switch (action.type) {
    default:
      return { ...state };

    case types.CHARGE_THEME:
      if (state.theme === 'light') return { ...state, theme: 'dark' };
      return { ...state, theme: 'light' };
  }
};

export default reducer;
