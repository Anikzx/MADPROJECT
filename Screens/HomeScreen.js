import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text>Welcome!</Text>
      <Text>A Food Recipe App</Text>
      <Image source={require('C:\Users\azhar\madproject\Constants\assets\image.jpg')}
            style={{width:200, height:200}}></Image>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'FFBD33',
    alignItems: 'center',
    justifyContent: 'center',
    space:10,
  },
});
