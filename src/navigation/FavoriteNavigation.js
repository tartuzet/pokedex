import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FavoriteScreen from '../screens/Favorite'
import PokemonScreen from '../screens/Pokemon'

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (

    <Stack.Navigator>

    <Stack.Screen 
    name="FavoriteScreen"
    component={FavoriteScreen}
    options={{
        title: '',
        headerTransparent: true

    }}
    />

    <Stack.Screen 
    name="Pokemon"
    component={PokemonScreen}
    options={{
        title: '',
        headerTransparent: true

    }}
    />

    </Stack.Navigator>



  )
}



