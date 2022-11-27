import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {SearchScreen} from "../screens/SearchScreen"
import {screen} from "../utils"

const Stack = createNativeStackNavigator();

/**Stack de restaurantes */

export function SearchStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen   name={screen.search.search} component={SearchScreen} options={{title: "Buscador"}} />
      

      {/* <Stack.Screen   name={screen.restaurant.addRestaurant} component={AddRestaurantScreen} options={{title: "Nuevo restaurante"}}/> */}
    </Stack.Navigator>
  )
}


