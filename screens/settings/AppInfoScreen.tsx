import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

type AppInfoScreenProps = {
  navigation: StackNavigationProp<any>;
};

const AppInfoScreen = ({navigation}: AppInfoScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Info</Text>
      <Text style={styles.version}>Version: 1.0.0</Text>
      <Text style={styles.credits}>Developed by: Your Name</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Terms & Privacy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  version: {
    fontSize: 16,
    marginBottom: 10,
  },
  credits: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AppInfoScreen;
