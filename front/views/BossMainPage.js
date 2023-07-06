import React from 'react';
import { View, Text, Pressable, StyleSheet   } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5  } from '@expo/vector-icons';


function BossMainPage({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#5c0b82", "#480965", "#190641", "#070320", "#000000"]}
        style={styles.linearGradient}
      >
        <Text style={styles.title}>Welcome, Boss</Text>

        <Pressable
          style={styles.menuButton}
          onPress={() => navigation.navigate('Financials')}
        >
          <FontAwesome5 name="dollar-sign" size={26} style={styles.icon} />
          <Text style={styles.buttonText}>Financial Management</Text>
        </Pressable>

        <Pressable
          style={styles.menuButton}
          onPress={() => navigation.navigate('Inventory')}
        >
          <FontAwesome5 name="boxes" size={26} style={styles.icon} />
          <Text style={styles.buttonText}>Inventory Management</Text>
        </Pressable>

        <Pressable
          style={styles.menuButton}
          onPress={() => navigation.navigate('Activities')}
        >
          <FontAwesome5 name="calendar-alt" size={26} style={styles.icon} />
          <Text style={styles.buttonText}>Activity Release</Text>
        </Pressable>

        <Pressable
          style={styles.menuButton}
          onPress={() => navigation.navigate('Feedback')}
        >
          <FontAwesome5 name="comments" size={26} style={styles.icon} />
          <Text style={styles.buttonText}>Receiving Evaluation Feedback</Text>
        </Pressable>

        <Pressable
          style={styles.menuButton}
          onPress={() => navigation.navigate('Orders')}
        >
          <FontAwesome5 name="shopping-cart" size={26} style={styles.icon} />
          <Text style={styles.buttonText}>Order Management</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
}

export default BossMainPage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    linearGradient: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '100%',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#faf2de',
      textAlign: 'center',
      marginBottom: 20,
    },
    menuButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      marginVertical: 10,
      borderRadius: 10,
      backgroundColor: '#faf2de',
      width: '80%',
    },
    icon: {
      marginRight: 10,
    },
    buttonText: {
      fontSize: 16,
    },
  });