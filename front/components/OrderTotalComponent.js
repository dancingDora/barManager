import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OrderTotalComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>数量</Text>
      <Text style={styles.largeText}>4</Text>
      <Text style={styles.smallText}>总计</Text>
      <Text style={styles.largeText}>￥396</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>追加评价</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 30,
  },
  smallText: {
    fontSize: 15,
    marginRight: 0,
  },
  largeText: {
    fontSize: 25,
    marginRight: 50,
  },
  button: {
    backgroundColor: '#32C5E9',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default OrderTotalComponent;