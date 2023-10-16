import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
  Image,
  Pressable,
} from 'react-native';
import PrimaryButton from './components/primaryButton';
import Logo from './components/logo';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Seja bem vindo(a)</Text>

      <Text style={styles.text}>Voce deseja:</Text>
      <PrimaryButton
        title='Fazer Cadastro'
        onPress={() => Alert.alert('Fazer Cadastro pressed')}
      />
      <PrimaryButton
        title='Fazer Login'
        onPress={() => Alert.alert('Fazer login pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCE7FF',
    gap: 24,
    padding: 20,
  },
  text: {
    color: '#000',
    fontSize: 22,
  },
  title: {
    color: '#000',
    fontSize: 30,
  },
  input: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#555',
    height: 44,
    width: 300,
  },
});
