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

export default Screen_03 = ({ navigation, route }) => {
  const {itemData} = route.params ?? {};
  return (
    <View style={styles.container}>
      <View style={styles.frameProduct}>
        <Image
          style={styles.imgProduct}
          source={itemData.img}
        />
      </View>
      <View style={styles.frameNameProduct}>
        <Text style={styles.nameProduct}> {itemData.name} </Text>
      </View>
      <View style={styles.framePrice}>
        <Text style={styles.price}>15% OFF {itemData.price}</Text>
        <Text style={styles.discount}>$449</Text>
      </View>
      <Text style={styles.nameProduct}>Description</Text>
      <Text style={styles.description}>
        It is very important form of writing as we write almost everything in
        paragraphs, be it an answer,essay, story, email, etc.
      </Text>
      <View style={styles.frameBtn}>
        <Image source={require('./assets/imgs/heartBlack.png')} />
        <TouchableOpacity style={styles.btnAdd}><Text style={styles.addToCard}>Add to card</Text></TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 375,
    height: 812,
    borderWidth: 1,
    justifyContent:'space-between',
    padding: 10,
  },
  frameProduct: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 358,
    height: 388,
  },
  imgProduct: {
    width: 297,
    height: 340,
  },
  frameNameProduct: {
    width: 200,
    height: 47,
    justifyContent: 'center',
  },
  nameProduct: {
    fontSize: 20,
    fontWeight: 600,
  },
  framePrice: {
    width: 220,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 20,
    color: 'gray',
  },
  discount: {
    fontSize: 20,
    textDecorationLine: 'line-through',
  },
  description: {
    fontSize: 18,
    color: 'gray',
  },
  frameBtn:{
    width:'100%',
    height:55,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  btnAdd:{
    width:270,
    height:'100%',
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
  },
  addToCard:{
    color:'white',
    fontSize:20,
  }
});
