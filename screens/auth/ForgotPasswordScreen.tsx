import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {RootStackNavigationProp} from '../../types/navigation';
// import {useAuth} from '../../contexts/AuthContext';

type ForgotPasswordScreenProps = {
  navigation: RootStackNavigationProp;
};

const ForgotPasswordScreen = ({navigation}: ForgotPasswordScreenProps) => {
  const [email, setEmail] = useState('');
  // const {resetPassword} = useAuth();

  const handleSubmit = async () => {
    try {
      // await resetPassword(email);
      Alert.alert('Success', 'Password reset link sent to your email');
      navigation.navigate('Login');
    } catch (error) {
      const errMsg = error instanceof Error ? error.message : String(error);
      Alert.alert('Error', errMsg);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Back to Login</Text>
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
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  link: {
    color: '#007BFF',
    marginTop: 10,
  },
});

export default ForgotPasswordScreen;
