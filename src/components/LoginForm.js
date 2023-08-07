import {Text, View,TextInput, Button } from 'react-native';


export default function LogingForm() {



    return (
        <View>
          <TextInput placeholder='Email' />
          <TextInput placeholder='Password' />
          <Button title='Enviar' onPress={()=>console.log("Enviar")} />
          
        </View>
      );



}
