import {faBorderAll, faHome, faSearch} from '@fortawesome/free-solid-svg-icons';
import HomeStack from './stacks/HomeStack';
import CategoryPage from './pages/CategoryPage.native';

export const homeBottomTabAndroidRoutes = [
  {
    icon: faHome,
    name: 'Home',
    component: HomeStack,
  },
  {
    icon: faBorderAll,
    name: 'Category',
    component: CategoryPage,
  },
];
