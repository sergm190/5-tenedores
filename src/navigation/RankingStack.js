import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {RankingScreen} from "../screens/RankingScreen"
import {screen} from "../utils"

const Stack = createNativeStackNavigator();

/**Stack de restaurantes */

export function RankingStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen   name={screen.ranking.ranking} component={RankingScreen} options={{title: "Ranking"}} />
      

      {/* <Stack.Screen   name={screen.restaurant.addRestaurant} component={AddRestaurantScreen} options={{title: "Nuevo restaurante"}}/> */}
    </Stack.Navigator>
  )
}


