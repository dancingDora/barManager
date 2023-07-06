import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const VerticalComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/image5.jpg')} style={styles.image} />
      <Text style={styles.text}>订单提交成功</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>返回首页</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default VerticalComponent;
