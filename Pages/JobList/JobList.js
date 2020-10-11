import React from 'react'
import { JCard } from '../../Components/JobCard/Card'
import { StyleSheet, View, Image, Button, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import { FilterPage } from '../FilterPage/FilterPage'
import { Messages, Notice, Proposals } from '../FilterPage/Message'
import { Dashboard } from '../Eshan/Dashboard'
import { JobDetails } from '../JobDetails/JobDetails'
import { PaymentPage } from '../paymentPage/PaymentPage'
export const JobList = ({ navigation }) => {
    return <View>
        <ScrollView>
            <JCard navigation={navigation} />
            <JCard navigation={navigation} />
            <JCard navigation={navigation} />
            <JCard navigation={navigation} />
            <JCard navigation={navigation} />
            <JCard navigation={navigation} />
            <JCard navigation={navigation} />
        </ScrollView>
    </View>

}

const styles = StyleSheet.create({
    touch: {
        alignItems: "center",
        padding: 0
    }
})

const Tab = createBottomTabNavigator();

export const TabNavPage = ({ navigation }) => {
    return <Tab.Navigator tabBarOptions={{
        labelStyle: {
            fontSize: 12,
            color: 'blue'
        }
    }}>
        <Tab.Screen name="JobList" component={JobList} options={{
            tabBarIcon: () => (
                <Image source={require('../../icons/check.png')} style={{ width: 30, height: 30 }} />
            )
        }} />

        <Tab.Screen name="Proposals" component={Proposals} options={{
            tabBarIcon: () => (
                <Image source={require('../../icons/docs.png')} style={{ width: 30, height: 30 }} />
            )
        }} />
        <Tab.Screen name="DashBoard" component={Dashboard} options={{
            tabBarIcon: () => (
                <Image source={require('../../icons/dashboard.png')} style={{ width: 30, height: 30 }} />
            ),
        }} />
        <Tab.Screen name="Messages" component={Messages} options={{
            tabBarIcon: () => (
                <Image source={require('../../icons/message.png')} style={{ width: 30, height: 30 }} />
            )
        }} />
        <Tab.Screen name="Notice" component={Notice} options={{
            tabBarIcon: () => (
                <Image source={require('../../icons/notice.png')} style={{ width: 30, height: 30 }} />
            )
        }} />
    </Tab.Navigator>
}

const LakshanStack = createStackNavigator();

export const LakshanNav = () => {


    return (
        <LakshanStack.Navigator>
            <LakshanStack.Screen name="JobList" component={TabNavPage} options={({ navigation, route }) => ({
                headerTitle: () => <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Find Services</Text>,
                headerRight: () => <Button title='filter' onPress={() => { navigation.push('FilterPage') }} />,
                headerStyle: { backgroundColor: '#0091ff' }
            })} />
            <LakshanStack.Screen name="JobDetails" component={JobDetails} options={({ navigation, route }) => ({
                headerTitle: () => <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Service Details</Text>,
                headerStyle: { backgroundColor: '#0091ff' }
            })} />
            <LakshanStack.Screen name="PlaceOrder" component={PaymentPage}
                options={({ navigation, route }) => ({
                    headerTitle: () => <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Place Order</Text>,
                    headerStyle: { backgroundColor: '#0091ff' }
                })} />
            <LakshanStack.Screen name="FilterPage" component={FilterPage}
                options={({ navigation, route }) => ({
                    headerTitle: () => <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Filter Services</Text>,
                    headerStyle: { backgroundColor: '#0091ff' }
                })} />
        </LakshanStack.Navigator>
    )
}
