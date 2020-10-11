import React from 'react';
import { View, ToastAndroid, ScrollView } from 'react-native';
import {
  Button,
  Input,
  Text,
  ListItem,
  Avatar,
  Rating,
  Header,
  ButtonGroup,
  SearchBar,
} from 'react-native-elements';

const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Java, Phython, React',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Java, Phython, React',
  },
  {
    name: 'Chris Jack',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Java, Phython, React',
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Java, Phython, React',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Java, Phython, React',
  },
  {
    name: 'Chris Jack',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Java, Phython, React',
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Java, Phython, React',
  }, {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Java, Phython, React',
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Java, Phython, React',
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Java, Phython, React',
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Java, Phython, React',
  }
];

const FindFreelancers = () => {
  const buttons = ['Treanding', 'Best Rated', 'Most Popular'];

  return (
    <View>

      <ButtonGroup selectedIndex={0} buttons={buttons} />
      <Input placeholder="Search" />
      <ScrollView>
        {list.map((l, i) => (
          <ListItem
            key={i}
            bottomDivider
            containerStyle={{
              margin: 10,
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 10,
            }}>
            <Avatar rounded size="medium" source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              <ListItem.Subtitle>
                <Rating imageSize={20} readonly startingValue={4} />
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
};
export default FindFreelancers;
