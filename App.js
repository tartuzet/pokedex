import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogingForm from './src/components/LoginForm';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola mundo</Text>

      <LogingForm/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
