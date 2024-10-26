import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default Screen_01 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.frameTile}>
        <Text style={styles.title}>
          A premium online store for sporter and thier stylish choice
        </Text>
      </View>
      <View style={styles.frameLogo}>
        <Image
          source={require('./assets/imgs/blueBike.png')}
          style={styles.bike}
        />
      </View>
      <View style={styles.frameNameShop}>
        <Text style={styles.nameShop}>POWER BIKE</Text>
        <Text style={styles.nameShop}>SHOP</Text>
      </View>
      <TouchableOpacity style={styles.btnStart} onPress={()=>{navigation.navigate('Screen_02')}}>
        <Text style={styles.txtGet}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 375,
    height: 812,
    borderWidth: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  frameTile: {
    display: 'flex',
    width: '100%',
    height: 87,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight:600,
    fontSize: 23,
    textAlign: 'center',
  },

  frameLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 359,
    height: 388,
    borderRadius: 50,
    backgroundColor: '#E941411A',
  },
  bike: {
    width: 292,
    height: 270,
  },
  frameNameShop: {
    width: 351,
    height: 61,
    justifyContent: 'center',
  },
  nameShop: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnStart: {
    display:'flex',
    width:340,
    height:61,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
    backgroundColor:'#E94141',
  },
  txtGet:{
    color:'white',
    fontWeight:600,
    fontSize:20,
  }
});
