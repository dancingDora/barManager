import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const UserItemComponent = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <View style={styles.buttonContent}>
          <Image
            source={require('../images/image6.jpg')}
          style={styles.image}
          />
          <Text style={styles.text}>我的订单></Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <View style={styles.buttonContent}>
          <Image
            source={require('../images/image6.jpg')}
          style={styles.image}
          />
          <Text style={styles.text}>联系客服></Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <View style={styles.buttonContent}>
          <Image
            source={require('../images/image6.jpg')}
          style={styles.image}
          />
          <Text style={styles.text}>投诉与建议></Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <View style={styles.buttonContent}>
          <Image
            source={require('../images/image6.jpg')}
          style={styles.image}
          />
          <Text style={styles.text}>更多></Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    flexDirection: 'column',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 50,
  },
  button: {
    marginTop: 20,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 18,
    marginLeft: 12,
    fontWeight: 'bold',
  },
});

export default UserItemComponent;
