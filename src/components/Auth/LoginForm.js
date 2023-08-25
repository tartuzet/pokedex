import { View, Text , StyleSheet, TextInput, Button, Keyboard} from 'react-native';
import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

export default function LoginForm() {

//Crear configuracion del forkik 
const formik = useFormik({
  initialValues:initialValues(),
  validationSchema : Yup.object(validationSchema()), // validaciones y se hace funcion para el esquema
  validateOnChange:false, //Sirve para quitar validaciones en tiempo real
  onSubmit: (formValues)=>{    //la funciona que se va a ejecutar cuando el formulario sea correcto y formValues llegan los datos del formualrio
    console.log('formulario enviado');
    console.log('formValues',formValues);

  }

});

  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      
      <TextInput 
      placeholder='Nombre de usuario'  
      style={styles.input} 
      autoCapitalize='none' 
      value={formik.values.username} 
      onChangeText={(text)=> formik.setFieldValue("username",text)}
      />

      <TextInput 
      placeholder='Contraseña'   
      style={styles.input}  
      autoCapitalize='none' 
      secureTextEntry={true} 
      value={formik.values.password} 
      onChangeText={(text)=> formik.setFieldValue("password",text)}

      />

      <Button title='Entrar' onPress={formik.handleSubmit} // formik.handleSubmit manda llamar el onSubmit
      /> 


      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>


    </View>
  )
}


// Se mueve los initialValues a esta parte
function initialValues() {
  return {
    username: "",
    password: "",
  }
}

//Esquema de validaciones 
function validationSchema(){
  return {
    username: Yup.string().required("El usuario es obligatario"),
    password: Yup.string().required("La contraseña es obligatoria")
  }

}

const styles = StyleSheet.create({

  title:{
    textAlign: 'center',
    fontSize:28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  error:{
    textAlign: 'center',
    color: '#f00',
    marginTop: 20
  }

})