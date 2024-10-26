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

export default Screen_02 = ({ navigation }) => {
  const Data = [
    {
      id: '1',
      name: 'Pinarello',
      price: '$1300',
      type: 'Roadbike',
      img: require('./assets/imgs/blueBike.png'),
    },
    {
      id: '2',
      name: 'Pinarello Mout',
      price: '$1500',
      type: 'Mountain',
      img: require('./assets/imgs/redbike.png'),
    },
    {
      id: '3',
      name: 'Pina Bike',
      price: '$1600',
      type: 'Roadbike',
      img: require('./assets/imgs/purplebike.png'),
    },
    {
      id: '4',
      name: 'Pinarello',
      price: '$1200',
      type: '',
      img: require('./assets/imgs/redbike.png'),
    },
    {
      id: '5',
      name: 'Pinarello',
      price: '$2900',
      type: '',
      img: require('./assets/imgs/purplebike.png'),
    },
    {
      id: '6',
      name: 'Pinarello',
      price: '$1100',
      type: '',
      img: require('./assets/imgs/redbike.png'),
    },
    {
      id: '7',
      name: 'Pinarello',
      price: '$1200',
      type: '',
      img: require('./assets/imgs/purplebike.png'),
    },
  ];
  [DATA, setDATA] = useState([]);
  var url = 'https://670b3e51ac6860a6c2cb8625.mockapi.io/BikeStore';

  useEffect(() => {
    var fn = fetch(url);
    fn.then((res) => res.json()).then((data) => {
      setDATA(data);
      console.log(data);
    });
  }, []);
  console.log(DATA);
  const [filteredData, setFilteredData] = useState(DATA);
  const handleFilter = (type) => {
    const newFilteredData = DATA.filter((item) => item.type === type);
    setFilteredData(newFilteredData);
  };
  const Item = ({ items }) => {
    return (
      <View style={styles.frameProduct}>
        <TouchableOpacity
          style={styles.product}
          onPress={() => {
            navigation.navigate('Screen_03', { itemData: items });
          }}>
          <View style={styles.fameViewBtn}>
            <Image
              source={require('./assets/imgs/heart.png')}
              style={styles.iconHeart}
            />
            <Image style={styles.imgProduct} source={items.img} />
            <View style={styles.frameDetailProduct}>
              <Text>{items.name}</Text>
              <Text>{items.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.frameTile}>
        <Text style={styles.title}>The world's Best Bike</Text>
      </View>
      <View style={styles.frameControl}>
        <TouchableOpacity
          style={styles.btnControl}
          onPress={() => {
            setFilteredData(DATA);
          }}>
          <Text style={styles.txtControl}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnControl}
          onPress={() => {
            handleFilter('type 1');
          }}>
          <Text style={[styles.txtControl, { color: '#BEB6B6' }]}>
            Roadbike
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnControl}
          onPress={() => {
            handleFilter('type 2');
          }}>
          <Text style={[styles.txtControl, { color: '#BEB6B6' }]}>Moutain</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.frameList}>
        <FlatList
          data={Data}
          renderItem={({ item }) => <Item items={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 375,
    height: 812,
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 10,
  },
  frameTile: {
    display: 'flex',
    width: '100%',
    height: 87,
    padding: 5,
  },
  title: {
    color: '#E94141',
    fontWeight: 600,
    fontSize: 23,
  },
  frameControl: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 32,
  },
  btnControl: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 99,
    height: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E9414187',
  },
  txtControl: {
    fontSize: 18,
    color: 'red',
  },
  frameList: {
    width: '100%',
    height: 640,
    borderWidth: 1,
  },
  frameProduct: {
    width: 167,
    height: 200,
    margin: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 3 },
  },
  product: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F7BA8326',
  },
  imgProduct: {
    width: 135,
    height: 127,
  },
  fameViewBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  frameDetailProduct: {
    display: 'flex',
    width: 100,
    height: 55,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconHeart: {
    position: 'absolute',
    top: 3,
    left: 8,
  },
});
