import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';
import Slider from '@react-native-community/slider'
import {useState} from 'react'
import {ModalPassoword} from './src/components/modal'



let charset = "0123456789@#$"



export default function App(){
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword(){
    let password = "";

    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)
    setModalVisible(true)
    
  }



  return(
    <View style={styles.container}>
      <Image source={require("./src/assets/logo.png")}
      style={styles.logo}
      />

      <Text style={styles.title}>{size} characters
      </Text>

      <View style={styles.area}>
        <Slider 
        style={{ height: 50}}
        minimumValue={6}
        maximumValue={20}
        maximumTrackTintColor="black"
        minimumTrackTintColor="blue"
        value={size}
        onValueChange={(value) => setSize(value.toFixed(0)) }        
        />

      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassoword password={passwordValue} handleClose={() => setModalVisible(false)} />
      </Modal>


    </View>

  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "black",
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
},
  logo:{
    marginBottom: 50    
},
  title:{color: "white",
  fontSize: 30,
  fontWeight: "bold"
},
  area:{
  marginTop: 14,
  marginBottom: 14,
  width: "80%",
  backgroundColor: "#FFF",
  borderRadius:8,
  padding: 1,
},
button:{
  backgroundColor:"blue",
  width: "80%",
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  marginBottom: 18
},
buttonText:{
  color: "white",
  fontSize: 20,
}
})