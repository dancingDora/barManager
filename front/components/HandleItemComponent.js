import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HandleItemComponent = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={require('../images/image7.jpg')} style={styles.image} />
      <Text style={styles.orderContent}>UserName</Text>
      <Text style={styles.orderContent}>订单内容</Text>
      <Text style={styles.productEvaluation}>产品评价</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    //backgroundColor:'rgba(255, 255, 255, 0.5)',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 20,
    marginBottom: 10,
    opacity:1,
  },
  orderContent: {
    fontSize: 16,
    color: 'white',
    marginRight: 10,
  },
  productEvaluation: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
});

export default HandleItemComponent;
