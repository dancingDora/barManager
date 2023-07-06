import React from 'react';
import { View, TextInput, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SuggestMainComponent = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="请输入你的建议与想法"
      />
      <TouchableOpacity
        style={styles.button0}
      >
        <Text style={styles.buttonText0}>请添加图片（可选择）</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.buttonText}>提交</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  input: {
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
   button0: {
     width: '100%',
     height: 200,
     backgroundColor: 'white',
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 20,
   },
   buttonText0: {
     color: '#FFD700',
     fontSize: 20,
   },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default SuggestMainComponent;
