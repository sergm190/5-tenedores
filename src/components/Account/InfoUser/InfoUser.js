import React from 'react'
import { View  } from 'react-native'
import { Avatar,Text } from "react-native-elements"
import {getAuth} from "firebase/auth"
import * as ImagePicker  from "expo-image-picker"
import {styles} from "./InfoUser.styles"

export  function InfoUser() {
  const {uid, photoURL, displayName, email} = getAuth().currentUser;

  const changeAvatar = async () =>{
    // console.log('Cambiar avatar');
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4,4]
    });

    if(!result.canceled) uploadImage(result.assets);
  }

  const uploadImage = (assets)=>{
    console.log(assets);
  }
  return (
    <View style={styles.content}>
      <Avatar 
        size="large" 
        rounded 
        containerStyle={styles.avatar}
        icon={{type: "material", name: "person"}}
        source={{ uri: photoURL }}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />

      </Avatar>
      <View>
        <Text style={styles.displayName}>{displayName || "Anonimo"}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  )
}