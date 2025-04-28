import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

type StickerGifStoreScreenProps = {
  navigation: StackNavigationProp<any>;
};

// Mock data for sticker packs and GIFs
const stickerPacks = [
  {id: '1', name: 'Funny Stickers', count: 20},
  {id: '2', name: 'Emoji Pack', count: 30},
  {id: '3', name: 'Animal Stickers', count: 15},
];

const StickerGifStoreScreen = ({navigation}: StickerGifStoreScreenProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredPacks = stickerPacks.filter(pack =>
    pack.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const renderItem = ({
    item,
  }: {
    item: {id: string; name: string; count: number};
  }) => (
    <TouchableOpacity style={styles.packItem}>
      <Text style={styles.packName}>{item.name}</Text>
      <Text style={styles.packCount}>{item.count} stickers</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search sticker packs..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredPacks}
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
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  packItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  packName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  packCount: {
    fontSize: 14,
    color: '#666',
  },
});

export default StickerGifStoreScreen;
