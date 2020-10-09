/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import ContactPage from "./pages/Dinuli/ContactPage";
import {Header} from "react-native-elements";
import EditProfile from "./pages/Dinuli/EditProfile";
import BrowseContest from "./pages/Dinuli/BrowseContest";
import ContestDetail from "./pages/Dinuli/ContestDetail";

const App: () => React$Node = () => {
  return (
    <>
      <Header
          placement="left"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Truelancer', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
      />

      {/*<BrowseContest/>*/}
      <ContestDetail/>
    </>
  );
};


export default App;
