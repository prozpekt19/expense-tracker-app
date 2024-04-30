import { StyleSheet, Text, View,Image,TouchableOpacity,Alert,ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Ionicons'

import * as ImagePicker from 'expo-image-picker';
import TextRecognition from '@react-native-ml-kit/text-recognition';


const More = () => {

  const [image,setImage] = useState("");
  const [text,setText] = useState();

  const pickImage = async () => {
    console.log("working");
    let result = await ImagePicker.launchImageLibraryAsync({ mediaType:'photo',base64:true,allowsEditing:true})
    if (result != undefined){
      setImage(result.assets[0].uri)
    }
  };

  const openCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaType:'photo',allowsEditing:true,base64:true})
       if(result != undefined){
      setImage(result.assets[0].uri)
    }
  };

  const handleChooseFunction = () => {
    Alert.alert(
      'Select an option',
      'for OCR Scanning:',
      [
        {
          text: 'Pick Image from Gallery',
          onPress: pickImage,
        },
        {
          text: 'Open Camera',
          onPress: openCamera,
        },
      ],
      { cancelable: true }
    );
  };

  const recognizeText = async () => {
    if (image != "") {
      const result = await TextRecognition.recognize(image);
      if (result != undefined){
        const numericText = result.text.replace(/[^0-9₹Rs.]/g,'');
        setText(numericText)
      }
    }
  }

  useEffect(() => {
    recognizeText()
  }, [image])

  return (
    <View style={styles.home}>
      <Text style={styles.morehead}>Auto Add Expenses</Text>
      <ScrollView>
      <Icon name="line-scan" color='white' size={30} style={styles.icon} />
      <Text style={styles.morehead1}>Bill Scanner</Text>
       <View style={styles.addocr}>
        <TouchableOpacity onPress={() => handleChooseFunction()}>
        <Image style={styles.card} resizeMode='cover' source={require("../assets/cards/ocr.png")}/>
        </TouchableOpacity>
        </View>
        <Icon1 name="notifications-outline" color='white' size={30} style={styles.icon} />
        <Text style={styles.morehead2}>Notification Extractor</Text>
      <View style={styles.automess}>
        <TouchableOpacity onPress={() => openCamera()}>
          <Image style={styles.noticard} resizeMode='cover' source={require("../assets/cards/notify.png")}/>
        </TouchableOpacity>
       </View>
       <Text style={styles.text2}>OCR Output</Text>
       <Text style={styles.text1}>{text}</Text>
       </ScrollView>
    </View>
  );
};

export default More

const styles = StyleSheet.create({
  home:{
      flex: 1,
      backgroundColor: "#111111",
      width: "100%",
      height: "100%",
      paddingTop: 50,
  },
  morehead:{
      color:'white',
      fontSize:23,
      marginBottom:15,
  },
  morehead1:{
    color:'black',
    fontSize:20,
    paddingTop:10,
    paddingLeft:15,
    marginLeft:40,
    paddingBottom:10,
    marginRight:160,
    borderRadius:25,
    backgroundColor:'white',
    marginTop:1,
},
morehead2:{
  color:'black',
  fontSize:20,
  paddingTop:10,
  paddingLeft:10,
  marginLeft:40,
  paddingBottom:10,
  marginRight:75,
  borderRadius:25,
  backgroundColor:'white'
},
  addocr: {
    width: 340,
    height: 200,
    backgroundColor: 'black',
    borderRadius: 10,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
  },
  card:{
    width:340,
    height:200,
    borderRadius: 10,
    
  },
  automess: {
    width: 340,
    height: 199,
    backgroundColor: 'black',
    borderRadius: 10,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
  },
  noticard:{
    width:340,
    height:199,
    borderRadius:10,
  },
  icon:{
  marginTop:50,
  marginBottom:-40
  },
  text1:{
    textAlign:'justify',
    fontSize:30,
    color:'white',
    borderRadius:15,
    paddingLeft:17,
    marginBottom:100,
  },
  text2:{
    color:'black',
    fontSize:22,
    marginTop:80,
    marginBottom:20,
    backgroundColor:'white',
    marginRight:189,
    paddingLeft:12,
    borderRadius:30,
    paddingTop:5,
    paddingBottom:5,
  }
})