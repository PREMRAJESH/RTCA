import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Animated} from 'react-native';
import {RootStackNavigationProp} from '../types/navigation';

type SplashScreenProps = {
  navigation: RootStackNavigationProp;
};

const SplashScreen = ({navigation}: SplashScreenProps) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      // Navigate to Onboarding or Home after animation
      setTimeout(() => {
        navigation.replace('Onboarding');
      }, 500);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/logo.png')}
        style={[styles.logo, {opacity: fadeAnim}]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
