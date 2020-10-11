import React, { useState } from 'react';
import { View, ToastAndroid, ScrollView } from 'react-native';
import {
  Button,
  Input,
  Text,
  ListItem,
  Avatar,
  Rating,
  CheckBox,
  Card,
  Icon,
  Header,
  ButtonGroup,
} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import PayoutMethods from './PayoutMethods';

export const TLWallet = () => {

  const [index, setIndex] = useState(0)

  const component1 = () => <Text>TL Wallet</Text>
  const component2 = () => <Text>Deposit</Text>
  const component3 = () => <Text>Payout methods</Text>

  const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]

  const ChangeScreen = () => {
    if (index === 0) {
      return <TLComponent />
    }
    if (index == 2) {
      return <PayoutMethods />
    } else {
      return <View><Text style={{ fontSize: 30, fontWeight: "bold", color: 'red' }}>Deposit</Text></View>
    }
  }

  return (
    <View>
      <Header
        placement="center"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{
          text: 'Payments',
          style: { color: '#fff', fontSize: 30 },
        }}
      />
      <ButtonGroup selectedIndex={index} buttons={buttons} onPress={(e) => { setIndex(e) }} />
      <ScrollView>
        {ChangeScreen()}
      </ScrollView>
    </View>
  );
};


const TLComponent = () => {
  return (
    <View>
      <Card containerStyle={{ borderRadius: 20 }}>
        <Card.Title style={{ backgroundColor: 'lightblue' }}>
          <Text h3>$467.43</Text>
        </Card.Title>
        <Card.Divider />
        <Text h4 style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          My Wallet
          </Text>
      </Card>

      <Card containerStyle={{ borderRadius: 20 }}>
        <Card.Title style={{ backgroundColor: 'lightblue' }}>
          <Text h3>$46.43</Text>
        </Card.Title>
        <Card.Divider />
        <Text h4 style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          My Buyer Locker
          </Text>
      </Card>

      <Card containerStyle={{ borderRadius: 20 }}>
        <Card.Title style={{ backgroundColor: 'lightblue' }}>
          <Text h3>$500.00</Text>
        </Card.Title>
        <Card.Divider />
        <Text h4 style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          My Seller Locker
          </Text>
      </Card>
    </View>
  )
}
