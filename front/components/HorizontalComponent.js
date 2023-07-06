import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HorizontalComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.quantityText}>数量</Text>
      <Text style={styles.numberText}>10</Text>
      <Text style={styles.priceText}>总价格</Text>
      <Text style={styles.numberText}>￥9999</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>确认提交订单</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor:'white',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  numberText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HorizontalComponent;
