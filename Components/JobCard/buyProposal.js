import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Button, Header, Input } from 'react-native-elements';

const BuyProposal = () => {
  return (
    <ScrollView>
      <Header
        centerComponent={{
          text: 'Buy Proposals',

          style: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle: 'italic',
          },
        }}
      />

      <View style={styles.main}>
        <Text style={styles.first}>Buy Extra Proposals</Text>
        <Text style={styles.second}>Keep Earning More</Text>
        <View style={styles.main} />
        <Text style={styles.third}>01 Proposal = 01$</Text>
        <Text style={styles.fourth}>How Many Proposals You Want ?</Text>
        <Input keyboardType='number-pad' />
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <Text style={styles.fifth}>Amount</Text>
          <View style={{ flex: 1 }} />
          <Text style={styles.fift}>$</Text>
        </View>
        <View style={styles.button} />
        <Button title="Buy Proposals" />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  main: {
    margin: 10,
  },
  button: {
    marginTop: 80,
  },
  first: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  second: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  third: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'right',
  },
  fourth: {
    color: '#3a0578',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'left',
  },
  fifth: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'left',
  },
  fift: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 30,
    alignContent: 'flex-end',
  },
});

export default BuyProposal;
