import * as React from 'react';
import { View, ToastAndroid, ScrollView } from 'react-native';
import {
  Button,
  Input,
  Text,
  ListItem,
  Avatar,
  Rating,
  CheckBox,
  PricingCard,
  Header,
  Icon,
  SocialIcon,
  Image,
  Tile,
} from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { LakshanNav } from '../JobList/JobList'
import { ContestNav } from '../Dinuli/BrowseContest';
import { TLWallet } from './TLWallet'
import FindFreelancers from './FindFreelancers';
import ContactPage from '../Dinuli/ContactPage';
import { EditProfile } from '../Dinuli/EditProfile'
import BuyProposal from '../../Components/JobCard/buyProposal'
import ChangePassword from '../../Components/JobCard/changePassword'
import { MainMemberNav } from '../../Components/JobCard/Membership/main';
import Contest from '../../Components/JobCard/Contest/mainC';
import { LaunchContestNav } from '../../Components/JobCard/Contest/mainC'


export const Dashboard = () => {
  return (
    <View>
      <Header
        placement="center"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{
          text: 'Dashboard',
          style: { color: '#fff', fontSize: 25 },
        }}
      />
      <ScrollView>
        <Image
          source={{
            uri:
              'data:image/jpeg;base64,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',
          }}
          style={{ width: 'auto', height: 200, margin: 10 }}
        />
        <Text h4 style={{ margin: 10 }}>
          Explore gigs
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View style={{ alignItems: 'center', margin: 15 }}>
            <SocialIcon type="twitter" />
            <Text>IT</Text>
          </View>
          <View style={{ alignItems: 'center', margin: 15 }}>
            <SocialIcon type="medium" />
            <Text>Photography</Text>
          </View>
          <View style={{ alignItems: 'center', margin: 15 }}>
            <SocialIcon type="facebook" />
            <Text>Data Entry</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View style={{ alignItems: 'center', margin: 15 }}>
            <SocialIcon type="flickr" />
            <Text>Wordpress</Text>
          </View>
          <View style={{ alignItems: 'center', margin: 15 }}>
            <SocialIcon type="foursquare" />
            <Text>Video Editting</Text>
          </View>
          <View style={{ alignItems: 'center', margin: 15 }}>
            <SocialIcon type="github-alt" />
            <Text>Illustrator</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View style={{ alignItems: 'center', margin: 15 }}>
            <SocialIcon type="google" />
            <Text>Electronic</Text>
          </View>
          <View style={{ alignItems: 'center', margin: 15 }}>
            <SocialIcon type="instagram" />
            <Text>Arduino</Text>
          </View>
          <View style={{ alignItems: 'center', margin: 15 }}>
            <SocialIcon type="vimeo" />
            <Text>Gaming</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const DrawerNav = createDrawerNavigator();



export const DashDrawer = () => {
  return (
    <DrawerNav.Navigator>
      <DrawerNav.Screen name="DashBoard" component={Dashboard} />
      <DrawerNav.Screen name="Search Services" component={LakshanNav} />
      <DrawerNav.Screen name="Buy Proposals" component={BuyProposal} />
      <DrawerNav.Screen name="Launch Contest" component={LaunchContestNav} />
      <DrawerNav.Screen name="Browse Contest" component={ContestNav} />
      <DrawerNav.Screen name="Payments" component={TLWallet} />
      <DrawerNav.Screen name="Find Freelancers" component={FindFreelancers} />
      <DrawerNav.Screen name="Profile" component={EditProfile} />
      <DrawerNav.Screen name="Change password" component={ChangePassword} />
      <DrawerNav.Screen name="Upgrade Membership" component={MainMemberNav} />
      <DrawerNav.Screen name="Contact us" component={ContactPage} />
    </DrawerNav.Navigator>
  )
}
