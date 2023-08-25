import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
// Se importa nuestro contexto
import {AuthProvider} from './src/context/AuthContext'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
          <Navigation />
      </AuthProvider>
    </NavigationContainer>
  );
}
