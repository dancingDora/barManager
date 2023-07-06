import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OrderCatalogComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.largeText,{color:'#cd853f'}]}>商品</Text>
        <Text style={[styles.smallText,{color:'#cd853f'}]}>单价</Text>
        <Text style={[styles.smallText,{color:'#cd853f'}]}>数量</Text>
        <Text style={[styles.smallText,{color:'#cd853f'}]}>小计</Text>
      </View>
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
  largeText: {
    fontSize: 20,
    marginRight: 80,
    marginLeft: 70,
  },
  smallText: {
    fontSize: 20,
    marginRight: 20,
  },
});

export default OrderCatalogComponent;