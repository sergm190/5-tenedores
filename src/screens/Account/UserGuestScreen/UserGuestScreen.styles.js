import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
  content:{
    marginHorizontal:30,
  },
  image:{
    resizeMode: "contain",
    height: 300,
    width: "100%",
    marginBottom: 40
  },
  title: {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center"
  },
  description:{
    textAlign: "justify",
    marginBottom: 20,
  },
  btnStyle:{
    backgroundColor: "#00a680",
    borderWidth: 2,
    borderRadius: 30,
    borderColor: 'white'
  }
})