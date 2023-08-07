import { View, Text,Button,SafeAreaView } from 'react-native'
import React from 'react'

export default function HomeScreen(props) {

    const {navigation} = props;

    const goToSettings = ()=>{

        navigation.navigate('Settings')

    }

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Button onPress={goToSettings} title='Ir a Settings'></Button>
    </SafeAreaView>
  )
}