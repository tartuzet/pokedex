import {Text, View } from 'react-native';


export default function Saludar(props) {

const {name} = props;


    return (
        <View>
            <Text>Hola {name} </Text>
        </View>
      );

}
