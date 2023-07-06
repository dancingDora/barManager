import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function FinancialsScreen() {
  const [financialData, setFinancialData] = useState({ daily: 0, monthly: 0, yearly: 0 });

  useEffect(() => {
    // Fetch financial data when component mounts
    fetchFinancialData();
  }, []);

  const fetchFinancialData = async () => {
    try {
      let response = await fetch('http://10.0.2.2:8000/getFinancialData.php');
      // console.log(response);
      let json = await response.json();
      
      setFinancialData(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Gradient background */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#5c0b82", "#480965", "#190641", "#070320", "#000000"]}
        style={styles.linearGradient}
      >
        <Text style={styles.title}>Financial Management</Text>

        <View style={styles.financialContainer}>
          <Text style={styles.financialText}>Daily Income: ${financialData.daily}</Text>
          <Text style={styles.financialText}>Monthly Income: ${financialData.monthly}</Text>
          <Text style={styles.financialText}>Yearly Income: ${financialData.yearly}</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  financialContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#faf2de',
  },
  financialText: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
});

export default FinancialsScreen;
