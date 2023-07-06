import React from 'react';
import { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={[styles.container, { width }]}>
    <Image source={require('../images/image1.jpg')} style={styles.image} />
    <Text style={styles.name}>Name</Text>
    <Text style={styles.description}>￥99</Text>
    <Text style={styles.count}>{count}</Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={increment} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decrement} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 20,
  },
  description: {
      fontSize: 20,
      marginRight: 50,
    },
  count: {
    fontSize: 18,
    marginRight: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  button: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
  lastButton: {
    marginRight: 0,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CounterComponent;