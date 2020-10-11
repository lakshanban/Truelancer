import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, PricingCard } from 'react-native-elements';
import LastPage from './lastPage';
import { Second } from './second';

export const MembershipM = ({ navigation }) => {


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
          <PricingCard title='Basic' info={['$5.00', 'For Month']} containerStyle={{ flex: 1 }} button={{ title: 'GET PACKAGE' }} onButtonPress={() => { navigation.push('Basic') }} />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <PricingCard title='Pro' info={['$10.00', 'For Month']} containerStyle={{ flex: 1 }} button={{ title: 'GET PACKAGE' }} />
          <PricingCard title='Plus' info={['$50.00', 'For Month']} containerStyle={{ flex: 1 }} button={{ title: 'GET PACKAGE' }} />
        </View>
      </ScrollView>
    </>
  )
}

const Nav = createStackNavigator()

export const MainMemberNav = () => {

  return (
    <Nav.Navigator screenOptions={{ headerShown: false }}>
      <Nav.Screen name="Memberships" component={MembershipM} />
      <Nav.Screen name="Basic" component={Second} />
      <Nav.Screen name="Last" component={LastPage} />
    </Nav.Navigator>
  )
}