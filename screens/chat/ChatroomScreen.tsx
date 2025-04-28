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

type ChatroomScreenProps = {
  navigation: StackNavigationProp<any>;
  route: {params: {chatId: string}};
};

// Mock data for messages
const messages = [
  {id: '1', text: 'Hey, how are you?', sender: 'user', timestamp: '10:30 AM'},
  {id: '2', text: 'I am good, thanks!', sender: 'other', timestamp: '10:31 AM'},
  {id: '3', text: 'What are you up to?', sender: 'user', timestamp: '10:32 AM'},
];

const ChatroomScreen = ({navigation, route}: ChatroomScreenProps) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim()) {
      // TODO: Implement Firebase real-time messaging
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const renderItem = ({
    item,
  }: {
    item: {id: string; text: string; sender: string; timestamp: string};
  }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'user' ? styles.userMessage : styles.otherMessage,
      ]}>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007BFF',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
  },
  messageText: {
    color: '#fff',
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  sendButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#fff',
  },
});

export default ChatroomScreen;
