/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text } from 'react-native';
import BuyProposal from './Components/Pages/buyProposal';
import ChangePassword from './Components/Pages/changePassword';
import GDetails from './Components/Pages/Contest/details';
import LastP from './Components/Pages/Contest/lastP';
import Contest from './Components/Pages/Contest/mainC';
import LastPage from './Components/Pages/Membership/lastPage';
import MembershipM from './Components/Pages/Membership/main'
import Second from './Components/Pages/Membership/second';


const App: () => React$Node = () => {
  return (
    <View>
      <LastP />
    </View>
  );
};

export default App;
