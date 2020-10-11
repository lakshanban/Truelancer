import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button, Header } from 'react-native-elements';

export const Second = ({ navigation }) => {


  return (
    <ScrollView>
      <Header
        centerComponent={{
          text: 'Membership Details',

          style: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle: 'italic',
          },
        }}
      />
      <View style={styles.sc}>
        <Text style={styles.first}>Basic</Text>
        <Text style={styles.second}>$5.00/Month</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.second}>Project/Service Fee</Text>
          <View style={styles.view} />
          <Text style={styles.second}>10%</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.second}>Proposal Per Month</Text>
          <View style={styles.view} />
          <Text style={styles.second}>50</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.second}>Skills</Text>
          <View style={styles.view} />
          <Text style={styles.second}>30</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.second}>Portfolio Slots</Text>
          <View style={styles.view} />
          <Text style={styles.second}>25</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.second}>Service Listings</Text>
          <View style={styles.view} />
          <Text style={styles.second}>15</Text>
        </View>

        <Button title="Upgrade Membership" containerStyle={styles.btn} onPress={() => { navigation.push("Last") }} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  first: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  second: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  view: {
    flex: 1,
  },
  btn: {
    marginTop: 50,
    marginBottom: 10,
  },
  sc: {
    margin: 10,
  }
});