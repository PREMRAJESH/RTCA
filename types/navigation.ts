import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Home: undefined;
  Contacts: undefined;
  Chatroom: {chatId: string};
  FilePreview: {fileUri: string; fileName: string};
  MediaGallery: {chatId: string};
  Profile: undefined;
  Settings: undefined;
  StickerGifStore: undefined;
  Notifications: undefined;
  ArchivedChats: undefined;
  StarredMessages: undefined;
  AppInfo: undefined;
};

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;
