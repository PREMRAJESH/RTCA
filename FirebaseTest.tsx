import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getApps, getApp} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const FirebaseTest = () => {
  const [connectionStatus, setConnectionStatus] =
    useState<string>('Testing...');
  const [firebaseInfo, setFirebaseInfo] = useState<any>(null);

  useEffect(() => {
    const testFirebaseConnection = async () => {
      try {
        // Check if Firebase is initialized
        const apps = getApps();
        if (apps.length > 0) {
          const app = getApp();
          setFirebaseInfo({
            name: app.name,
            options: app.options,
          });
          setConnectionStatus('Firebase initialized successfully');

          // Test Firestore connection
          try {
            const testDoc = await firestore()
              .collection('test')
              .doc('connection-test')
              .get();
            setConnectionStatus(
              'Firebase and Firestore connected successfully',
            );
          } catch (firestoreError) {
            setConnectionStatus(
              `Firebase initialized but Firestore error: ${firestoreError}`,
            );
          }
        } else {
          setConnectionStatus('Firebase not initialized');
        }
      } catch (error) {
        setConnectionStatus(`Firebase connection failed: ${error}`);
      }
    };

    testFirebaseConnection();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Firebase Connection Test</Text>
      <Text style={styles.status}>Status: {connectionStatus}</Text>
      {firebaseInfo && (
        <View style={styles.info}>
          <Text style={styles.infoTitle}>Firebase App Info:</Text>
          <Text>Name: {firebaseInfo.name}</Text>
          <Text>Project ID: {firebaseInfo.options.projectId}</Text>
          <Text>Auth Domain: {firebaseInfo.options.authDomain}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  status: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },
  info: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    maxWidth: 300,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
});

export default FirebaseTest;
