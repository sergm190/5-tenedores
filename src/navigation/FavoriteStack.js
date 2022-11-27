import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {FavoritesScreen} from "../screens/FavoritesScreen"
import {screen} from "../utils"

const Stack = createNativeStackNavigator();

/**Stack de restaurantes */

export function FavoriteStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen   name={screen.favorite.favorites} component={FavoritesScreen} options={{title: "Favoritos"}} />
      

      {/* <Stack.Screen   name={screen.restaurant.addRestaurant} component={AddRestaurantScreen} options={{title: "Nuevo restaurante"}}/> */}
    </Stack.Navigator>
  )
}


