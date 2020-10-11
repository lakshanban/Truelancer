import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ScrollView } from 'react-native';
import { Card, ListItem, Header } from 'react-native-elements';
import { DashBoard } from '../../../Pages/FilterPage/Message';
import LastP from '../Contest/lastP';
import { GDetails } from './gDetails'



const Contest = ({ navigation }) => {
  return (
    <ScrollView>
      <Header
        centerComponent={{
          text: 'Choose Contest Category',

          style: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle: 'italic',
          },
        }}
      />

      <Card containerStyle={{ padding: 0 }}>
        {users.map((u, i) => {
          return (
            <Card>
              <ListItem
                key={i}
                title={u.name}
                titleStyle={{ fontWeight: 'bold', alignSelf: 'center' }}
                onPress={() => { navigation.push('GDetails', { name: users[i].name }) }}
              />
            </Card>
          );
        })}
      </Card>
    </ScrollView>
  );
}

export default Contest;


const users = [
  {
    name: 'Logo Design'
  },
  {
    name: 'Department'
  },
  {
    name: 'CSS'
  },
  {
    name: 'Batch Design'
  },
  {
    name: 'Banner Design'
  },
  {
    name: 'Shirt Design'
  },
  {
    name: ' Design'
  },
]

const Nav = createStackNavigator()

export const LaunchContestNav = () => {

  return (
    <Nav.Navigator screenOptions={{ headerShown: false }}>
      <Nav.Screen name="Launch Contest" component={Contest} />
      <Nav.Screen name="GDetails" component={GDetails} />
      <Nav.Screen name="LastPage" component={LastP} />

    </Nav.Navigator>
  )
}