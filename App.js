import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}> 
            <Entypo name="menu" style={styles.icon} />
            <Text style={styles.homeetxt}>My Notes</Text>
            <Entypo name="dots-three-vertical" style={styles.icon2} />
            </View>
            <View style={styles.next}>
        <TextInput placeholder="Enter Text..." style={styles.input}/>
        <Entypo name="circle-with-plus" style={styles.icon3} />

      </View>
      <View style={styles.center}>     
         <Text style={styles.centertxt}>Create your first note</Text>
         </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1BB96',
    
  },

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    paddingHorizontal: 16,
    alignItems: "center"
  },
icon: {
    fontSize:28,
    color: "black",
    fontWeight:300,
    borderRadius: 10,
    padding: 10,
  },

  icon2:{
    fontSize:23,
    color:'#2D2C2C',
  },

homeetxt: {
    color: "black",
    fontSize: 23,
    fontWeight:700,
    right:74,
    
  },

  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    width: '77%',
    paddingLeft: 20,
    borderRadius: 30,
    marginTop: 580,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10
    },
  
  next:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    paddingHorizontal: 16,
  },
    icon3:{
      fontSize:45,
      color: "black",
      fontWeight:500,
      padding: 10,
      marginTop:572,
    },

    center:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      bottom:380
    },
    centertxt:{
      color:'#393938',
      fontSize:17,
      flex:1,
    }
    
});
