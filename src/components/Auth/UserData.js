import { View, Text , StyleSheet, Button} from 'react-native'
import React, {useCallback,useState} from 'react'
import useAuth from '../../hooks/useAuth'
import {useFocusEffect} from '@react-navigation/native'
import {getPokemonsFavoriteApi} from '../../api/favorite'


export default function UserData() {

  const {auth,logout} = useAuth();
  const [total, setTotal] = useState(0);

  useFocusEffect( // Para que cuando entre se actualice el total
    useCallback(()=>{ // para que cuando cambie algo se actualice

      (async ()=>{

        try {
          const response = await getPokemonsFavoriteApi()
          setTotal(response.length) //saco total de pokemons favoritos 

        } catch (error) {
          setTotal(0)
        }
      })()

    },[])


  )


  return (
    <View style={styles.content}>

      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido, </Text>
        <Text style={styles.title}> {`${auth.firstName} ${auth.lastName}`}   </Text>
      </View>


      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Usuario" text={`${auth.username}`} />
        <ItemMenu title="Correo" text={`${auth.email}`} />
        <ItemMenu title="Total de Favoritos" text={`${total} Pokemons`} />


      </View>

    <View style={styles.btnLogout} >
    <Button title="Desconectarse" onPress={logout} />   
    </View>

    </View>
  )
}


function ItemMenu(props){
  const {title,text} = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>

    </View>
  );
}

const styles = StyleSheet.create({

  content: {
    marginHorizontal:20,
    marginTop:20
  },
  titleBlock:{
    marginBottom:30
  },
  title:{
    fontWeight: "bold",
    fontSize:22
  },
  dataContent:{
    marginBottom:20
  },
  itemMenu:{
    flexDirection:"row",
    paddingVertical:20,
    borderBottomWidth:1,
    borderColor:"#CFCFCF"
  },
  itemMenuTitle:{
    fontWeight:"bold",
    width:150,
    paddingRight:10
  },
  btnLogout:{
    paddingTop:20
  }
});