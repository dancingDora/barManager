import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ProductComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/image4.jpg')} style={styles.image} />
      <Text style={styles.text}>已添加的商品</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    width: width - 20,
    alignSelf: 'center',
  },
  image: {
    width: 70,
    height: 55,
    marginRight: 20,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductComponent;
