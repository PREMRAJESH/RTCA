import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

type StarredMessagesScreenProps = {
  navigation: StackNavigationProp<any>;
};

// Mock data for starred messages
const starredMessages = [
  {
    id: '1',
    text: 'Hey, how are you?',
    sender: 'John Doe',
    timestamp: '10:30 AM',
  },
  {
    id: '2',
    text: 'I am good, thanks!',
    sender: 'Jane Smith',
    timestamp: '10:31 AM',
  },
  {
    id: '3',
    text: 'What are you up to?',
    sender: 'Alice Johnson',
    timestamp: '10:32 AM',
  },
];

const StarredMessagesScreen = ({navigation}: StarredMessagesScreenProps) => {
  const renderItem = ({
    item,
  }: {
    item: {id: string; text: string; sender: string; timestamp: string};
  }) => (
    <TouchableOpacity style={styles.messageItem}>
      <Text style={styles.sender}>{item.sender}</Text>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={starredMessages}
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
  messageItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sender: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  messageText: {
    fontSize: 14,
    color: '#666',
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    alignSelf: 'flex-end',
  },
});

export default StarredMessagesScreen;
