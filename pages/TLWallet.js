import React from 'react';
import {View, ToastAndroid, ScrollView} from 'react-native';
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

const TLWallet = () => {
  const buttons = ['TL Wallet', 'Deposit', 'Payout Methods'];

  return (
    <View>
      <Header
        placement="center"
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{
          text: 'Payments',
          style: {color: '#fff', fontSize: 30},
        }}
      />
      <ButtonGroup selectedIndex={0} buttons={buttons} />
      <ScrollView>
        <Card containerStyle={{borderRadius: 20}}>
          <Card.Title style={{backgroundColor: 'lightblue'}}>
            <Text h3>$467.43</Text>
          </Card.Title>
          <Card.Divider />
          <Text h4 style={{marginLeft: 'auto', marginRight: 'auto'}}>
            My Wallet
          </Text>
        </Card>

        <Card containerStyle={{borderRadius: 20}}>
          <Card.Title style={{backgroundColor: 'lightblue'}}>
            <Text h3>$46.43</Text>
          </Card.Title>
          <Card.Divider />
          <Text h4 style={{marginLeft: 'auto', marginRight: 'auto'}}>
            My Buyer Locker
          </Text>
        </Card>

        <Card containerStyle={{borderRadius: 20}}>
          <Card.Title style={{backgroundColor: 'lightblue'}}>
            <Text h3>$500.00</Text>
          </Card.Title>
          <Card.Divider />
          <Text h4 style={{marginLeft: 'auto', marginRight: 'auto'}}>
            My Seller Locker
          </Text>
        </Card>
      </ScrollView>
    </View>
  );
};
export default TLWallet;
