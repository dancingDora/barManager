//我的订单界面
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import MyOrderComponent from '../components/MyOrderComponent';
import OrderSortComponent from '../components/OrderSortComponent';
import OrderItemComponent from '../components/OrderItemComponent';
import OrderCatalogComponent from '../components/OrderCatalogComponent';
import OrderTotalComponent from '../components/OrderTotalComponent';
import { LinearGradient } from 'expo-linear-gradient';

const MyOrderView = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#5c0b82", "#480965", "#190641", "#070320", "#000000"]}
        style={styles.linearGradient}
      >
        <MyOrderComponent />
        <OrderSortComponent/>
        <OrderCatalogComponent/>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <OrderItemComponent/>
          <OrderItemComponent/>
          <OrderTotalComponent/>
          <OrderItemComponent/>
          <OrderItemComponent/>
          <OrderTotalComponent/>
          <OrderItemComponent/>
          <OrderItemComponent/>
          <OrderTotalComponent/>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default MyOrderView;