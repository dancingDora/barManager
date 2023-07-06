//接受评价反馈页面
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import HandleSortComponent from '../components/HandleSortComponent';
import HandleItemComponent from '../components/HandleItemComponent';
import HandleReplyComponent from '../components/HandleReplyComponent';
import HandleTopComponent from '../components/HandleTopComponent';
import { LinearGradient } from 'expo-linear-gradient';

const HandleEvaluationView = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#5c0b82", "#480965", "#190641", "#070320", "#000000"]}
        style={styles.linearGradient}
      >
        <HandleTopComponent/>
        <HandleSortComponent/>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <HandleItemComponent/>
          <HandleReplyComponent/>
          <HandleItemComponent/>
          <HandleReplyComponent/>
          <HandleItemComponent/>
          <HandleReplyComponent/>
          <HandleItemComponent/>
          <HandleReplyComponent/>
          <HandleItemComponent/>
          <HandleReplyComponent/>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default HandleEvaluationView;