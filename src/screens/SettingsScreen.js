import { View, Text , Button} from 'react-native'
import React from 'react'

export default function SettingsScreen(props) {

    const {navigation} = props;

    const goToHome = ()=>{

        navigation.navigate('Home')

    }


  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button onPress={goToHome} title='Ir a Home'></Button>

    </View>
  )
}

