import React from 'react'
import { View } from 'react-native'
import {Button} from "react-native-elements"
import {Auth, getAuth, signOut} from "firebase/auth"
import {InfoUser} from "../../../components/Account";
import {styles} from "./UserLoggedScreen.styles"

export  function UserLoggedScreen() {

  const logout = async () => {
    // console.log("cerrar sesion");
    const auth = getAuth();
    await signOut(auth);
  }
  return (
    <View >
     <InfoUser />
     <Button title="Cerrar sesión " 
      buttonStyle={styles.btnStyles} 
      titleStyle={styles.btnText}
      onPress={logout}
      />
    </View>
  )
}