/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{backgroundColor: 'red', height: 90}} />
      <Text>Hehe</Text>
      <Izin />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Izin = () => {
  return <Text>Izin</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/animals'}}
      style={{width: 100, height: 100}}
    />
  );
};

export default App;
