import {Text, View } from 'react-native';
import PropTypes from 'prop-types' ;

export default function Saludar(props) {

const {firstname,lastname} = props;


    return (
        <View>
            <Text>Hola {firstname} {lastname}</Text>
        </View>
      );

}

// Saludar.defaultProps = {

// firstname : "Gustavo" ,
// lastname: "Isidoro"

// };

Saludar.propTypes ={
    firstname: PropTypes.string.isRequired,
    lastname:PropTypes.string
};
