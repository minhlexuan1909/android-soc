// @ts-ignore
import {ReducerRegistry} from 'lib-clevai-auth';
import {TAction} from '../../base';
import {ACTION_TYPES} from './actionTypes';

const initState = {};

ReducerRegistry.register('discovery', (state = initState, action: TAction) => {
  switch (action.type) {
    default:
      return state;
  }
});
