import {Image} from "react-native";
import {createBottomTabNavigator} from  '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome5";
import AccountScreen from '../screens/Account';
import FavoriteScreen from '../screens/Favorite';
import PokedexNavigation from "./PokedexNavigation";


const Tab = createBottomTabNavigator();

export default function Navigation() {

return (

    <Tab.Navigator >
        <Tab.Screen name='Favorite' component={FavoriteScreen}  options={{
            tabBarLabel:"Favoritos",
            headerTitle: "Favoritos",
            tabBarIcon: ({color,size})=>(
                <Icon name='heart' color={color} size={size} />
            )
        }} 
        />
        <Tab.Screen name='Pokedex' component={PokedexNavigation} options={{
            tabBarLabel:"",
            headerShown: false,
            tabBarIcon: ()=> renderPokeball()
            
        }}
        
        />
        
        <Tab.Screen name='Account' component={AccountScreen} options={{
            tabBarLabel:"Mi cuenta",
            headerTitle: "Mi cuenta",
            tabBarIcon: ({color,size})=>(
                <Icon name='user' color={color} size={size} />
            )
        }}
        />


    </Tab.Navigator>
)

}



function renderPokeball(){


    return(
    <Image source={require('../assets/pokeball.png')}
    style={{width:75,height:75,top:-15}}
    />

    )
}