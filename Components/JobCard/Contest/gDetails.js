import * as React from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput } from 'react-native';
import { Button, Header, Input } from 'react-native-elements';
import { Appbar, RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';

export const GDetails = ({ route, navigation }) => {
  const [checked, setChecked] = React.useState('invited');
  const [date, setDate] = React.useState('2020-05-05');
  const name = route.params
  console.log(name)
  return (
    <ScrollView>
      <Header
        centerComponent={{
          text: 'Give Details',

          style: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle: 'italic',
          },
        }}
      />
      <View style={styles.main}>
        <Text style={styles.first}>
          Please give more information about your contest.
        </Text>
        <Text style={styles.textfeild}>Contest Title</Text>
        <Input placeholder="Type Contest Title" value={name.name} />
        <Text style={styles.textfeild}>Contest Description</Text>
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="grey"
          placeholder="Type about Contest"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />
        <Text style={styles.textfeild}>Contest End Date</Text>
        <DatePicker
          style={{ width: 200 }}
          date={date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2030-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'relative',
              right: 0,
              top: 2,
              marginRight: 0,
            },
            dateInput: {
              marginLeft: 0,
              flex: 1,
            },
          }}
          onDateChange={(date) => setDate(date)}
        />
        <Text style={styles.textfeild}>Prize</Text>
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="grey"
          placeholder="Type about Prizes"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />
        <Text style={styles.textfeild}>Visibility</Text>
        <View style={{ flexDirection: 'row' }}>
          <RadioButton
            value="invited"
            status={checked === 'invited' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('invited')}
          />
          <Text style={styles.radio}>Invited Freelancers</Text>
          <RadioButton
            value="all"
            status={checked === 'all' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('all')}
          />
          <Text style={styles.radio}>All Freelancers</Text>
        </View>
        <Button
          title="Continue"
          onPress={() => { navigation.push('LastPage') }}
          containerStyle={styles.btn}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    margin: 10,
  },
  first: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  textfeild: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3a0578',
    fontFamily: 'Cochin',
  },
  btn: {
    marginBottom: 15,
    marginTop: 10,
  },
  radio: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  textArea: {
    height: 100,
    justifyContent: 'flex-start',
  },
});

