import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

type FilePreviewScreenProps = {
  navigation: StackNavigationProp<any>;
  route: {params: {fileUri: string; fileName: string}};
};

const FilePreviewScreen = ({navigation, route}: FilePreviewScreenProps) => {
  const {fileUri, fileName} = route.params;

  const handleSend = () => {
    // TODO: Implement file sending logic
    console.log('Sending file:', fileName);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>File Preview</Text>
      <Text style={styles.fileName}>{fileName}</Text>
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Send</Text>
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
  fileName: {
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

export default FilePreviewScreen;
