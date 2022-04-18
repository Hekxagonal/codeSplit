import * as types from './actions';
import { dataProps } from './data';

interface iAction {
  type: string;
  payload?: {
    username?: string;
    data?: {
      name: string;
      last_name: string;
      title: string;
      level: string;
      linkedIn: string;
      open_to_work: string;
    };
  };
}

const reducer = (state: dataProps, action: iAction) => {
  switch (action.type) {
    default:
      return { ...state };

    case types.LOGIN: {
      return { ...state, user: action.payload?.username };
    }

    case types.SET_GITHUB_DATA: {
      return { ...state, data: action.payload?.data };
    }
  }
};

export default reducer;
