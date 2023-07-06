import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const HandleTopComponent = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.text}>评价</Text>
      <TouchableOpacity style={styles.button}>
        <Image source={require('../images/image8.jpg')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor:'rgba(255, 255, 255, 0.5)',
  },
  buttonText: {
    fontSize: 36,
    color: 'white',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
  },
  image: {
    width: 24,
    height: 24,
    opacity:0.5,
  },
});

export default HandleTopComponent;