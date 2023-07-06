//购物车页面
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import CounterComponent from '../components/CounterComponent';
import HorizontalComponent from '../components/HorizontalComponent';
import ProductComponent from '../components/ProductComponent';


const ShoppingCartView = () => {
  return (
    <View style={styles.container}>
      <ProductComponent />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <CounterComponent />
        <CounterComponent />
        <CounterComponent />
        <CounterComponent />
        <CounterComponent />
        <CounterComponent />
        <CounterComponent />
      </ScrollView>
      <HorizontalComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 20,
    alignItems: 'center',
  },
});

export default ShoppingCartView;