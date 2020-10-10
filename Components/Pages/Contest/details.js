import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Button, Header, Input } from 'react-native-elements';

const GDetails = () => {
  return (
    <ScrollView>
      <Header
        centerComponent={{
          text: 'Give Details',

          style: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle: 'italic',
          },
        }}
      />
      <View style={styles.main}>
        <Text style={styles.first}>Please give more information about your contest.</Text>
        <Text style={styles.textfeild}>Contest Title</Text>
        <Input />
        <Text style={styles.textfeild}>Contest Description</Text>
        <Input />
        <Text style={styles.textfeild}>Contest End Date</Text>
        <Input />
        <Text style={styles.textfeild}>Prize</Text>
        <Input />
        <Text style={styles.textfeild}>Visibility</Text>
        <Button title="Continue" onPress={() => alert("continued")} containerStyle={styles.btn} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    margin: 10,
  },
  first: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  textfeild: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3a0578',
    fontFamily: 'Cochin',
  },
  btn: {
    marginBottom: 15,
    marginTop: 10,
  },
});

export default GDetails;
