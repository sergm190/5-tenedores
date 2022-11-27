import React from 'react'
import { View, ScrollView } from 'react-native'
import { Text, Button, Image } from 'react-native-elements';
import {useNavigation} from "@react-navigation/native"
import {screen} from "../../../utils"
import {styles} from "./UserGuestScreen.styles"



export  function UserGuestScreen() {
  const navigation = useNavigation();

  const goToLogin = () =>{
    // console.log("Ir a login");
    navigation.navigate(screen.account.login);
  }
  
  return (
   <ScrollView centerContent={true} style={styles.content}>
      <Image source={require("../../../../assets/img/perfil.png")} style={styles.image}/>
      <Text style={styles.title}>Consultar tu perfil!</Text>
      <Text style={styles.description}>
        ¿Como describiras tu mejor restaurante? Busca y visualiza los mejores restaurantes de una forma sencilla, vota cual te ha gustado más y comenta como ha sido tu experiencia.
      </Text>

      <Button title="Ver tu perfil"
        onPress={goToLogin}
        buttonStyle={styles.btnStyle}
      />
   </ScrollView>
  )
}