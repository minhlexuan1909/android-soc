import {Api, TResponse, USER_SERVICES_BASE_URL} from '../../base';
import {TAccoutDetail, TMyInfo} from '../utils';

export const apiGetMyInfo = () => {
  return Api.get(`${USER_SERVICES_BASE_URL}/api/me/`, {});
};

export const apiUpdateMyInfo = (params: TAccoutDetail) => {
  return Api.patch(`${USER_SERVICES_BASE_URL}/api/me/`, params);
};
