
import { StyleSheet, Text, View } from 'react-native';
import Saludar from './src/components/Saludar';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Text>Hola mundo</Text>

      <Saludar firstname="Gaby" lastname="Lopez"/>
      <Saludar firstname="Cesar" lastname="Huyta" />


    </View>

    </NavigationContainer>
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
