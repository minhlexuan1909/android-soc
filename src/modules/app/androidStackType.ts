import {NavigatorScreenParams} from '@react-navigation/native';
import {AuthStackParamList} from '../auth';
import {ProfileStackParamList} from '../profile';
import {BottomTabParamList} from './androidBottomStackTypes';
import {BaseStackParamList} from '../base/stackTypes';
import {ProductStackParamList} from '../product/stackTypes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
export type RootStackParamList = {
  BottomTab: NavigatorScreenParams<BottomTabParamList>;
} & BaseStackParamList &
  AuthStackParamList &
  ProfileStackParamList &
  ProductStackParamList;

export type NavProps = NativeStackScreenProps<RootStackParamList>;
