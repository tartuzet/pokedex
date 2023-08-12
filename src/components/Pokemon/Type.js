import { StyleSheet,View,Text} from 'react-native'
import React from 'react'
import getColorByPokemonType from '../../utils/getColorByPokemonType'

export default function Type(props) {

    const {types} = props;
    console.log (types); 
  return (
    <View style={syles.content}>

        {types.map(function(item, index){
                return( 
                    <View key={index} style={{...syles.pill,backgroundColor:getColorByPokemonType(item.type.name)}}>
                        <Text>{item.type.name}</Text>
                    </View>
                )
            })
        }


    </View>
  )
}


const syles = StyleSheet.create({

    content: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10
    }

})