
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import PokedexScreen from '../screens/Pokedex';
import PokemonScreen from '../screens/Pokemon';

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
        {/* <Stack.Screen name='Pokemon' component={PokemonScreen} options={{ title: 'Pokemon'}} /> */}
        <Stack.Screen name='PokedexScreen' component={PokedexScreen} />

    </Stack.Navigator>
  )
}