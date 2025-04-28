import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

type MediaGalleryScreenProps = {
  navigation: StackNavigationProp<any>;
  route: {params: {chatId: string}};
};

// Mock data for media items
const mediaItems = [
  {
    id: '1',
    type: 'image',
    name: 'image1.jpg',
    uri: 'https://example.com/image1.jpg',
  },
  {
    id: '2',
    type: 'video',
    name: 'video1.mp4',
    uri: 'https://example.com/video1.mp4',
  },
  {
    id: '3',
    type: 'pdf',
    name: 'document1.pdf',
    uri: 'https://example.com/document1.pdf',
  },
];

const MediaGalleryScreen = ({navigation, route}: MediaGalleryScreenProps) => {
  const renderItem = ({
    item,
  }: {
    item: {id: string; type: string; name: string; uri: string};
  }) => (
    <TouchableOpacity
      style={styles.mediaItem}
      onPress={() =>
        navigation.navigate('FilePreview', {
          fileUri: item.uri,
          fileName: item.name,
        })
      }>
      <Text style={styles.mediaName}>{item.name}</Text>
      <Text style={styles.mediaType}>{item.type}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mediaItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  mediaItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  mediaName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mediaType: {
    fontSize: 14,
    color: '#666',
  },
});

export default MediaGalleryScreen;
