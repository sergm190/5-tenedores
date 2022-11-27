import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements';
import {screen} from "../../utils"



export  function RestaurantsScreen(props) {

  const {navigation} = props;
  // console.log(props);

  const goToAddRestaurant = () =>{
    /**para viajar dentro de una misma screen ej: crear restaurante*/
    navigation.navigate(screen.restaurant.addRestaurant)

    /**viajando en una screen diferente ej: screen de cuenta */
    // navigation.navigate(screen.account.tab, {screen: screen.account.account})

    console.log("ir la creacion de restaurante");
  }

  return (
    <View>
      <Text>RestaurantsScreen</Text>

      <Button title="Crear Restaurante" onPress={goToAddRestaurant}/>
    </View>
  )
}