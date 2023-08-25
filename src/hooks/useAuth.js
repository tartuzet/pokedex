import {useContext} from "react";
import {AuthContext} from '../context/AuthContext'



export default ()=> useContext(AuthContext); 

// Este hook accede a nuestro contexto extrae el value y lo devuelve
