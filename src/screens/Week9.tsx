import {
  Alert,
  Button,
  Image,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../globalStyles';
import Geolocation from 'react-native-geolocation-service';
import { pick } from '@react-native-documents/picker';

import { launchCamera } from 'react-native-image-picker';

const Week9 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [location, setLocation] = useState<any>(null);
  const [fileName, setFileName] = useState<any>();
  const requestCameraPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  };

  const handleCameraLaunch = async () => {
    const granted = await requestCameraPermission();

    if (!granted) {
      console.log('Camera permission denied');
      return;
    }

    const options: any = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, handleResponse);
  };

  const handleResponse = (response: any) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;
      setSelectedImage(imageUri);
    }
  };
  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location.',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };
  const getLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      Alert.alert('Permission Denied', 'Location permission is required.');
      return;
    }

    Geolocation.getCurrentPosition(
      position => {
        setLocation(position);
      },
      error => {
        console.warn(error.code, error.message);
        Alert.alert('Error', error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  };
  const handleFilePick = async () => {
    try {
      const [file] = await pick({
        allowMultiSelection: false,
      });
      setFileName(file);
    } catch (err: any) {
      if (err?.code === 'DOCUMENT_PICKER_CANCELED') {
        Alert.alert('Cancelled', 'File picking cancelled');
      } else {
        console.error(err);
        Alert.alert('Error', 'Something went wrong');
      }
    }
  };
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.imageContainer}>
          {selectedImage && (
            <Image
              source={{ uri: selectedImage }}
              style={styles.image}
              resizeMode="cover"
            />
          )}
        </View>
        <View style={{ marginVertical: '5%' }}>
          <Button title="Open Camera" onPress={handleCameraLaunch} />
        </View>

        <Text style={styles.title}>Location</Text>
        {location ? (
          <Text>
            Lat: {location?.coords?.latitude}, Lon:{' '}
            {location?.coords?.longitude}
          </Text>
        ) : (
          <Text>No location fetched yet.</Text>
        )}
        <Button title="Get Current Location" onPress={getLocation} />
        <View style={{ marginTop: '10%' }}>
          <Text style={styles.title}>
            {fileName ? 'Pick File: ' : 'Selected File'}
          </Text>
          {fileName && <Text style={styles.title}>{fileName?.name}</Text>}
          <Button title="Choose File" onPress={handleFilePick} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Week9;

const styles = StyleSheet.create({
  imageContainer: {
    borderWidth: 4,
    width: 150,
    height: 150,
    marginTop: '10%',
    borderRadius: 75,
    borderColor: '#f47029',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
});
