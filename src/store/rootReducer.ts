import { combineReducers } from 'redux';
import { IUser } from '../types/user.types';
import { USER_UPLOAD } from './types';

export interface IUserState {
  user: IUser | null;
  userLoaded: boolean;
}

const userInitialState: IUserState = {
  user: null,
  userLoaded: false
};

function userReducer(state = userInitialState, action) {
  if (action.type === USER_UPLOAD) {
    return { ...state, user: action.payload, userLoaded: true }
  }
  return state;
}

export const rootReducer = combineReducers({
  user: userReducer,
})