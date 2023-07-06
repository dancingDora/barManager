import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const MyOrderComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/image6.jpg')} style={styles.image} />
      <Text style={styles.text}>我的订单</Text>
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
    height: 70,
    marginRight: 20,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyOrderComponent;