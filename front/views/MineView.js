//我的页面
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import UserTitleComponent from '../components/UserTitleComponent';
import UserItemComponent from '../components/UserItemComponent';
import UserBottomComponent from '../components/UserBottomComponent';

const MineView = () => {
  return (
    <View style={styles.container}>
      <UserTitleComponent />
      <UserItemComponent />
      <UserBottomComponent  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
});

export default MineView;