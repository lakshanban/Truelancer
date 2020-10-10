import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, PricingCard } from 'react-native-elements';

export default class MembershipM extends Component {
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
            text: 'Membership',

            style: {
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              fontStyle: 'italic',
            },
          }}
        />

        <ScrollView>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <PricingCard title='Free' info={['$0.00', 'For Month']} containerStyle={{ flex: 1 }} button={{ title: 'GET PACKAGE' }} />
            <PricingCard title='Basic' info={['$5.00', 'For Month']} containerStyle={{ flex: 1 }} button={{ title: 'GET PACKAGE' }} />
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <PricingCard title='Pro' info={['$10.00', 'For Month']} containerStyle={{ flex: 1 }} button={{ title: 'GET PACKAGE' }} />
            <PricingCard title='Plus' info={['$50.00', 'For Month']} containerStyle={{ flex: 1 }} button={{ title: 'GET PACKAGE' }} />
          </View>
        </ScrollView>
      </>
    );
  }
}
