import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Header, PricingCard } from 'react-native-elements';

export default class LastPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <Header
          centerComponent={{
            text: 'Membership Package',

            style: {
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              fontStyle: 'italic',
            },
          }}
        />
        <Text style={styles.first}>Basic Membership</Text>
        <ScrollView>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <PricingCard title='Monthly' info={['$ 5.00', 'For Month']} button={{ title: 'BUY PACKAGE' }} />
            <PricingCard title='Yearly' info={['$ 50.00', 'For Year']} containerStyle={{ flex: 1 }} button={{ title: 'BUY PACKAGE' }} />
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  first: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
});
