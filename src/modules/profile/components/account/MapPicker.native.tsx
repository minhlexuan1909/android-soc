import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
} from 'react-native';
import MapView from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {TextInput} from 'react-native-gesture-handler';
import {StyleSheet, ScrollView} from 'react-native';
import {DEFAULT_RIPPLE_COLOR, PillButton, commonStyle} from '../../../base';
import {useDispatch} from 'react-redux';
import {updateMyInfo} from '../../redux/actions';

const GOOGLE_API_KEY = 'AIzaSyBEe8j7b4qYzCSXHLZa5W6FvYBN2GM1gC0';

const latitudeDelta = 0.025;
const longitudeDelta = 0.025;

const MapPicker = () => {
  const dispatch = useDispatch();

  const [region, setRegion] = useState({
    latitudeDelta,
    longitudeDelta,
    latitude: 12.840575,
    longitude: 77.651787,
  });
  const [forceRefresh, setForceRefresh] = useState(0);
  const [listViewDisplayed, setListViewDisplayed] = useState(true);
  const [address, setAddress] = useState('');
  // const [searchText, setSearchText] = useState('');
  const [currentLat, setCurrentLat] = useState('');
  const [currentLng, setCurrentLng] = useState('');

  let searchTextRef: any = null;
  // let mapView: any = null;
  const mapViewRef = useRef(null);

  const goToInitialLocation = (region: any) => {
    let initialRegion = Object.assign({}, region);
    initialRegion['latitudeDelta'] = 0.005;
    initialRegion['longitudeDelta'] = 0.005;
    console.log(initialRegion);
    if (mapViewRef.current) {
      console.log(mapViewRef);
      mapViewRef.current.animateToRegion(initialRegion, 2000);
    }
  };

  const getAddress = () => {};

  const onRegionChange = (region: any) => {
    setRegion(region);
    setForceRefresh(Math.floor(Math.random() * 100));

    getAddress(); //callback
  };

  const handleSaveAddress = () => {
    dispatch(updateMyInfo({address}));
  };

  return (
    <View style={styles.map}>
      <MapView
        ref={mapViewRef}
        onMapReady={() => goToInitialLocation(region)}
        style={styles.map}
        initialRegion={region}
        onRegionChangeComplete={onRegionChange}
      />
      <View style={styles.panel}>
        <View
          style={[
            styles.panelHeader,
            listViewDisplayed ? styles.panelFill : styles.panel,
          ]}>
          <GooglePlacesAutocomplete
            currentLocation={false}
            enableHighAccuracyLocation={true}
            ref={(c: any) => (searchTextRef = c)}
            placeholder="Search for a location"
            minLength={2} // minimum length of text to search
            // autoFocus={false}
            // returnKeyType={'search'}
            // listViewDisplayed={listViewDisplayed}
            fetchDetails={true}
            renderDescription={(row: any) => row.description}
            enablePoweredByContainer={false}
            listUnderlayColor="lightgrey"
            onPress={(data: any, details: any) => {
              setListViewDisplayed(false);
              setAddress(data.description);
              setCurrentLat(details.geometry.location.lat);
              setCurrentLng(details.geometry.location.lng);
              setRegion({
                latitudeDelta,
                longitudeDelta,
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              });
              // this.setState({
              //   listViewDisplayed: false,
              //   address: data.description,
              //   currentLat: details.geometry.location.lat,
              //   currentLng: details.geometry.location.lng,
              //   region: {
              //     latitudeDelta,
              //     longitudeDelta,
              //     latitude: details.geometry.location.lat,
              //     longitude: details.geometry.location.lng,
              //   },
              // });
              // searchTextRef.setAddressText('');
              goToInitialLocation({
                latitudeDelta,
                longitudeDelta,
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              });
            }}
            textInputProps={{
              onChangeText: (text: any) => {
                console.log(text);
                // this.setState({listViewDisplayed: true});
                setListViewDisplayed(true);
              },
            }}
            query={{
              key: GOOGLE_API_KEY,
              language: 'en', // language of the results
            }}
            styles={{
              description: {
                fontFamily: 'Calibri',
                color: 'black',
                fontSize: 12,
              },
              predefinedPlacesDescription: {
                color: 'black',
              },
              listView: {
                position: 'absolute',
                marginTop: 44,
                backgroundColor: 'white',
                borderBottomEndRadius: 15,
                elevation: 2,
              },
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            filterReverseGeocodingByTypes={[
              'locality',
              'administrative_area_level_3',
            ]}
            debounce={200}
          />
        </View>
      </View>
      <View style={styles.markerFixed}>
        <Image
          style={styles.marker}
          source={require('../../assets/image/pointer.png')}
        />
      </View>
      <KeyboardAvoidingView style={styles.footer}>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <Text style={styles.addressText}>Address</Text>
        </View>
        <TextInput
          multiline={true}
          clearButtonMode="while-editing"
          style={{
            marginBottom: 5,
            width: '100%',
            minHeight: 70,
            alignSelf: 'center',
            borderColor: 'lightgrey',
            borderWidth: 1.5,
            fontSize: 12,
            borderRadius: 5,
            flex: 0.5,
            alignContent: 'flex-start',
            textAlignVertical: 'top',
            fontFamily: 'Calibri',
          }}
          onChangeText={(text: string) => setAddress(text)}
          value={address}
        />
        <PillButton
          android_ripple={{color: DEFAULT_RIPPLE_COLOR}}
          onPress={handleSaveAddress}>
          <Text style={commonStyle.primaryBtnText}>Save address</Text>
        </PillButton>
      </KeyboardAvoidingView>
    </View>
  );
};

export default MapPicker;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%',
  },
  marker: {
    height: 30,
    width: 20,
  },
  addressText: {
    color: 'black',
    margin: 3,
    fontFamily: 'Calibri',
  },
  footer: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
    bottom: 0,
    position: 'absolute',
    width: '100%',
    height: '30%',
  },
  panelFill: {
    position: 'absolute',
    top: 0,
    alignSelf: 'stretch',
    right: 0,
    left: 0,
  },
  panel: {
    position: 'absolute',
    top: 0,
    alignSelf: 'stretch',
    right: 0,
    left: 0,
    flex: 1,
  },
  panelHeader: {
    //add custom header
  },
});
