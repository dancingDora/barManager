import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OrderItemComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/image2.jpg')}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.smallText}>name</Text>
        <Text style={styles.smallText}>￥99</Text>
        <Text style={styles.smallText}>2</Text>
        <Text style={styles.smallText}>￥198</Text>
      </View>
      {/*
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>追加评价</Text>
      </TouchableOpacity>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 30,
  },
  textContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  smallText: {
    fontSize: 20,
    marginRight: 30,
  },
//  largeText: {
//    fontSize: 20,
//  },
//  button: {
//    backgroundColor: '#32C5E9',
//    paddingVertical: 5,
//    paddingHorizontal: 10,
//    borderRadius: 5,
//  },
//  buttonText: {
//    color: 'white',
//    fontSize: 12,
//  },
});

export default OrderItemComponent;
