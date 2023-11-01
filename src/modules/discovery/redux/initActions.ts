import InitAction from '../../base/redux/InitAction';
import {getProducts, getTags} from './actions';

InitAction.register(getProducts);
InitAction.register(getTags);
