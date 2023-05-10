import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';

export const requestPermission = () => {
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
};

export const getFCMToken = async () => {
  let fcmtToken = AsyncStorage.getItem('fcmtoken');
  console.log(fcmtToken);

  if (!fcmtToken) {
    try {
      const fcmtoken = await messaging().getToken();
      await AsyncStorage.setItem('fcmtoken', fcmtoken);
      console.log(fcmtoken);
    } catch (error) {
      console.log(error);
    }
  }
};

export const notificationListener = async () => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

  messaging().onMessage(async remoteMessage => {
    console.log('Notification on froground state ...');
  });
};
