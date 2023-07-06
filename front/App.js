import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ShoppingCartView from './views/ShoppingCartView';
import SubmitOrderView from './views/SubmitOrderView';
import MyOrderView from './views/MyOrderView';
import MineView from './views/MineView';
import SuggestView from './views/SuggestView';
import HandleEvaluationView from './views/HandleEvaluationView';

const App = () => {
  return (
    <View style={styles.container}>
      {/*<ShoppingCartView/>
      <SubmitOrderView/>
      <MyOrderView/>*/}
      {/*<MineView/>
      <SuggestView/>*/}
      <HandleEvaluationView/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;