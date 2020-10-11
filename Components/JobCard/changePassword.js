import React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Button, Header } from 'react-native-elements';

const ChangePassword = () => {
  return (
    <ScrollView>
      <Header
        centerComponent={{
          text: 'Change Password',

          style: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle: 'italic',
          },
        }}
      />
      <View style={styles.main}>
        <Text style={styles.text}>
          You Can Easily Change Your Password.{'\n'}Fill Below Details For That.
        </Text>
        <View style={styles.margin} />
        <Text style={styles.textfeild}>Old Password</Text>
        <TextInput placeholder="Old Password" />
        <Text style={styles.textfeild}>New Password</Text>
        <TextInput placeholder="New Password" />
        <Text style={styles.textfeild}>Confirm Password</Text>
        <TextInput placeholder="Confirm Password" />
        <View style={styles.margin} />
        <Button title="Save Password" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 18,
    textAlign: 'justify',
  },
  main: {
    margin: 10,
  },
  margin: {
    marginTop: 40,
  },

  textfeild: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3a0578',
    fontFamily: 'Cochin',
  },
});

export default ChangePassword;
