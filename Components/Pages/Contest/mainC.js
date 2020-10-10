import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon, Header } from 'react-native-elements';

const Contest = () => {
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
                onPress={() => alert('Click Again')}
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