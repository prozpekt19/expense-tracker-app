import { StyleSheet, Text, View,ScrollView, TouchableOpacity} from "react-native";
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Settings = () => {
  return (
    <View style={styles.home}>
      <Text style={styles.SettingsHead}>Settings</Text>
    <ScrollView>
      <Text style={styles.options1}>About this project</Text>
      <TouchableOpacity>
      <View style={styles.export}>
        <Icon  name="database-arrow-down-outline" color={'white'} size={30} style={styles.exporticon}/>
      <Text style={styles.options2}>Export Data as CSV File</Text>
      </View>
      </TouchableOpacity>
    </ScrollView>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({

home: {
  flex: 1,
  backgroundColor: "#111111",
  width: "100%",
  height: "100%",
  paddingTop: 50,

},
SettingsHead:{
 color:'white',
 fontSize:25,
},
options1:{
  color:'white',
  paddingTop:40,
  fontSize:17,
},
options2:{
  color:'white',
  paddingTop:20,
  fontSize:17,
  borderStyle:'dashed',
  borderColor:'white',
  marginLeft:10,
},
export: {
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 1,
  marginVertical: 20,
  borderColor: "white",
  borderStyle: "solid",
  borderRadius: 10,
  paddingBottom:20,
},
exporticon:{
  marginTop:20,
},
})