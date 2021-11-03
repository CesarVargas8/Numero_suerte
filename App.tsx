import React, { useState } from 'react'
import { Image, StyleSheet, TextInput, View, Alert, ToastAndroid, Button } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState(0);
  const opt = () =>{
    if (number >= 1  ) {
      ToastAndroid.show('Enter a age', ToastAndroid.SHORT);
      return;
    }
    if (name === '' ) {
      ToastAndroid.show('Enter a name', ToastAndroid.SHORT);
        return;
    }
    var res = number
    if (res < 10) {
      res *= 7
    }
    if (res > 9) {
        while (res > 9) {

      }
  }
  Alert.alert(`Hello ${name} your lucky number is: ${res}`)
}
  return (
<View style ={styles.Container}> 
<Image style={styles.Pictures} 
source={require('./src/images/Num_lucky.png')} />

<TextInput style= {styles.Inputs} 
placeholder='Enter your Name' 
onChangeText={(name) => setName(name)}>
</TextInput>

<TextInput style= {styles.Inputs} 
placeholder='Enter your Age' 
onChangeText={(number) => setNumber(parseInt(number))}>
</TextInput>


<View style= {styles.ControlsContainer}>
<View style={styles.ButtonConteiner}>
    <Button title="Ok" onPress={opt}/>
</View>
</View>
</View>
  )
}

const styles = StyleSheet.create({
  Container:{
    alignItems: 'center',
    backgroundColor: '#1A5276',
    display:'flex',
    height: '100%',
    justifyContent:'center',
  },
  Pictures:{
    margin: 20,
    width: 200,
    height:200,
    borderRadius: 15,
  },
  Inputs:{
    borderWidth: 10,
    borderRadius: 10,
    borderColor: '#17202A',
    padding: 10, 
    margin: 20,
    width: 250,
    marginBottom: 10,
  },
  Text:{
    fontSize: 20, 
     fontWeight: '500',
     letterSpacing: 2,
   },
   ControlsContainer:{
     alignItems: 'center',
     margin: 25,
     width:'100%',
   },
   ButtonConteiner:{
     alignItems: 'center',
     display:'flex',
     flexDirection:'column',
     justifyContent: "space-around",
     margin:20,
     width:'100%',
   },
});
 export default App;