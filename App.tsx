/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import './config/firebase';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types/navigation';
// import {AuthProvider} from './contexts/AuthContext';

// Import screens (to be created)
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import ForgotPasswordScreen from './screens/auth/ForgotPasswordScreen';
import HomeScreen from './screens/chat/HomeScreen';
import ContactsScreen from './screens/chat/ContactsScreen';
import ChatroomScreen from './screens/chat/ChatroomScreen';
import FilePreviewScreen from './screens/chat/FilePreviewScreen';
import MediaGalleryScreen from './screens/chat/MediaGalleryScreen';
import ProfileScreen from './screens/profile/ProfileScreen';
import SettingsScreen from './screens/settings/SettingsScreen';
import StickerGifStoreScreen from './screens/settings/StickerGifStoreScreen';
import NotificationsScreen from './screens/settings/NotificationsScreen';
import ArchivedChatsScreen from './screens/chat/ArchivedChatsScreen';
import StarredMessagesScreen from './screens/chat/StarredMessagesScreen';
import AppInfoScreen from './screens/settings/AppInfoScreen';

const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    // <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#007BFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contacts" component={ContactsScreen} />
        <Stack.Screen name="Chatroom" component={ChatroomScreen} />
        <Stack.Screen name="FilePreview" component={FilePreviewScreen} />
        <Stack.Screen name="MediaGallery" component={MediaGalleryScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen
          name="StickerGifStore"
          component={StickerGifStoreScreen}
        />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="ArchivedChats" component={ArchivedChatsScreen} />
        <Stack.Screen
          name="StarredMessages"
          component={StarredMessagesScreen}
        />
        <Stack.Screen name="AppInfo" component={AppInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // </AuthProvider>
  );
}

export default App;
