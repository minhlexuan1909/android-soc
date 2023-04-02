import {authRoutes} from '../auth';
import {profileRoutes} from '../profile';

export const androidRoutes = [...authRoutes, ...profileRoutes];
