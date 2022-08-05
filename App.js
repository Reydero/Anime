import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView ,Image} from 'react-native';
import { Button } from 'react-native-web';
import  style from'./App.module.css';

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.head}></View>
     <View style={styles.box}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={styles.im}>
      <Image
          style={styles.tinyLogo}
          source={{uri: 'https://animevost.org/uploads/posts/2022-06/1655791129_1.jpg'}}
        />
      </View>
      <View style={styles.im}>
      <Image
          style={styles.tinyLogo}
          source={{uri: 'https://animevost.org/uploads/posts/2022-06/1655791129_1.jpg'}}
        />
      </View>
      <View style={styles.im}>
      <Image
          style={styles.tinyLogo}
          source={{uri: 'https://animevost.org/uploads/posts/2022-06/1655791129_1.jpg'}}
        />
      </View>
      <View style={styles.im}>
      <Image
          style={styles.tinyLogo}
          source={{uri: 'https://animevost.org/uploads/posts/2022-06/1655791129_1.jpg'}}
        />
      </View>
      </View>
      
      <StatusBar style="auto" />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor: '#fff',
    

   
  },
  head:{
    display:'flex',
    width:'70%',
    height:'2%',

backgroundColor:'green',

  },
  box:{
backgroundColor:'red',
width:'50%',
height:'50%',
opasity:0.9,

  },
  im:{
    display:'flex',
    alignItems:'center',
    width:'100%',
    height:'100%',

  },
  tinyLogo: {
    width:'50%',
    height: '50%',
    resizeMode:'contain',
    
  },
});
