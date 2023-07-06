//这是注册界面

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";
import ImageViewer from "../components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
const PlaceholderImage = require("../assets/images/background-image.png");
import * as React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  PixelRatio,
  TextInput,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
//import {Text } from 'react-native';

const createTwoButtonAlert = () =>
  Alert.alert("提示：", "您已注册成功！", [
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);

export function SignView({ navigation }) {
  const [value, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.push("Home")}>
        <Image
          source={require("../assets/bar/Back.png")}
          style={{ marginLeft: 20, marginTop: 45 }}
        />
      </Pressable>

      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText} numberOfLines={1}>
          欢迎
        </Text>
        <Text style={styles.infoText}>请输入信息以完成注册</Text>
      </View>
      <View style={styles.inputBar}>
        <FontAwesome name="user" size={20} style={{ marginLeft: 25 }}>
          <Text style={styles.smallText}>用户名</Text>
        </FontAwesome>

        <TextInput
          maxLength={40}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          style={styles.input}
          placeholder="请输入用户名"
        />
      </View>
      <View style={styles.inputBar}>
        <FontAwesome name="lock" size={20} style={{ marginLeft: 25 }}>
          <Text style={styles.smallText}>密码</Text>
        </FontAwesome>
        <TextInput
          style={styles.input}
          placeholder="请输入密码"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputBar}>
        <FontAwesome name="lock" size={20} style={{ marginLeft: 25 }}>
          <Text style={styles.smallText}>重复密码</Text>
        </FontAwesome>
        <TextInput
          style={styles.input}
          placeholder="请再次输入密码"
          secureTextEntry={true}
        />
      </View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#5c0b82", "#480965", "#190641", "#070320", "#000000"]}
        style={styles.linearGradient}
      >
        <Pressable
          onPress={() => {
            navigation.push("Main");
            createTwoButtonAlert();
          }}
        >
          <Text style={styles.regText}>注册</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    //    alignItems: 'center',
  },
  welcomeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // marginTop: 60,
    height: 60,
  },
  welcomeText: {
    fontSize: PixelRatio.getFontScale() * 30,
    //    fontFamily: STKaiti,
  },
  infoText: {
    color: "#aaa",
    fontSize: PixelRatio.getFontScale() * 15,
    lineHeight: 38,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  smallText: {
    fontSize: PixelRatio.getFontScale() * 15,
    color: "#aaa",
    // paddingLeft: 20
  },
  footerContainer: {
    flex: 1 / 2,
    alignItems: "center",
    backgroundColor: "#500B82",
    width: 380,
    height: 57,
    bottom: 0,
    //      marginTop: 600,
    //      paddingTop: 737,
  },
  inputBar: {
    flex: 1,
    // borderBottomColor: "#000",
    // borderBottomWidth: 1,
  },
  regText: {
    fontSize: PixelRatio.getFontScale() * 22,
    color: "#fff",
    margin: 21,
  },
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 320,
    // borderRadius: 10,
    borderTopColor: "#fff",
    borderLeftColor: "#Fff",
    borderRightColor: "#fff",
    borderBottomColor: "#1A252D",
  },
  linearGradient: {
    height: 57,
    flex: 1 / 2,
    alignItems: "center",
  },
});
