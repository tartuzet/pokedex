import { StyleSheet, Text, View } from 'react-native';
import Saludar

from './src/components/Saludar';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola mundo</Text>

      <Saludar/>
      <Saludar name="Gaby" />
      <Saludar name="Gustavo" />


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
