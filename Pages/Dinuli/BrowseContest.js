import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
    ScrollView,
    View,
    StatusBar, StyleSheet, TouchableOpacity,
} from 'react-native';
import { ListItem, Text, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import ContestDetail from "./ContestDetail";

export const BrowseContest: () => React$Node = ({ navigation }) => {

    const list = [
        {
            status: 'Guaranteed',
            title: 'Contest title',
            entries: '100 entries',
            timeStamp: '00/00/00 00:00',
            price: 'Rs. 00.00 /='
        },
        {
            status: 'Guaranteed',
            title: 'Contest title',
            entries: '100 entries',
            timeStamp: '00/00/00 00:00',
            price: 'Rs. 00.00 /='
        }, {
            status: 'Guaranteed',
            title: 'Contest title',
            entries: '100 entries',
            timeStamp: '00/00/00 00:00',
            price: 'Rs. 00.00 /='
        }, {
            status: 'Guaranteed',
            title: 'Contest title',
            entries: '100 entries',
            timeStamp: '00/00/00 00:00',
            price: 'Rs. 00.00 /='
        }, {
            status: 'Guaranteed',
            title: 'Contest title',
            entries: '100 entries',
            timeStamp: '00/00/00 00:00',
            price: 'Rs. 00.00 /='
        }, {
            status: 'Guaranteed',
            title: 'Contest title',
            entries: '100 entries',
            timeStamp: '00/00/00 00:00',
            price: 'Rs. 00.00 /='
        }, {
            status: 'Guaranteed',
            title: 'Contest title',
            entries: '100 entries',
            timeStamp: '00/00/00 00:00',
            price: 'Rs. 00.00 /='
        }, {
            status: 'Guaranteed',
            title: 'Contest title',
            entries: '100 entries',
            timeStamp: '00/00/00 00:00',
            price: 'Rs. 00.00 /='
        }, {
            status: 'Guaranteed',
            title: 'Contest title',
            entries: '100 entries',
            timeStamp: '00/00/00 00:00',
            price: 'Rs. 00.00 /='
        }, {
            status: 'Guaranteed',
            title: 'Contest title',
            entries: '100 entries',
            timeStamp: '00/00/00 00:00',
            price: 'Rs. 00.00 /='
        }, {
            status: 'Guaranteed',
            title: 'Contest title',
            entries: '100 entries',
            timeStamp: '00/00/00 00:00',
            price: 'Rs. 00.00 /='
        }, {
            status: 'Guaranteed',
            title: 'Contest title',
            entries: '100 entries',
            timeStamp: '00/00/00 00:00',
            price: 'Rs. 00.00 /='
        }, {
            status: 'Guaranteed',
            title: 'Contest title',
            entries: '100 entries',
            timeStamp: '00/00/00 00:00',
            price: 'Rs. 00.00 /='
        }, {
            status: 'Guaranteed',
            title: 'Contest title',
            entries: '100 entries',
            timeStamp: '00/00/00 00:00',
            price: 'Rs. 00.00 /='
        }
    ]

    let onPressButton = () => {
        window.location.href = './ContestDetail';

    }

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >

                <View >
                    <View style={styles.sectionFilter}>
                        <Button
                            title="Sort"
                            type="clear"
                            icon={
                                <Icon
                                    name="sort"
                                    size={22}
                                    color="#A3EBFB"
                                    style={{ padding: 5, margin: 1 }}
                                />
                            }
                        />
                        <Button
                            title="Filter"
                            type="clear"
                            icon={
                                <Icon
                                    name="filter"
                                    size={22}
                                    color="#A3EBFB"
                                    style={{ padding: 5, margin: 1 }}
                                />
                            }
                        />
                    </View>

                    <View>

                        {
                            list.map((l, i) => (
                                <TouchableOpacity onPress={() => { navigation.push("ContestDetails") }}>
                                    <ListItem key={i} bottomDivider>
                                        <ListItem.Content>
                                            <View style={styles.listContainer}>
                                                <View style={{ width: '75%' }}>
                                                    <ListItem.Title style={styles.SectionStatus}>
                                                        {l.status}
                                                    </ListItem.Title>

                                                    <ListItem.Subtitle
                                                        style={styles.sectionTitle}

                                                    >
                                                        {l.title}
                                                    </ListItem.Subtitle>
                                                    <ListItem.Subtitle>
                                                        {l.entries}  <Text>  | </Text>  {l.timeStamp}
                                                    </ListItem.Subtitle>
                                                </View>
                                                <View style={{ width: '25%' }}>
                                                    <ListItem.Subtitle>
                                                        <Text>{l.price}</Text>
                                                    </ListItem.Subtitle>
                                                </View>
                                            </View>
                                        </ListItem.Content>
                                    </ListItem>
                                </TouchableOpacity>
                            ))
                        }

                    </View>

                </View>
            </ScrollView>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    listContainer: {
        flexDirection: "row",
        flex: 1,
        alignItems: 'center'
    },
    sectionFilter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 60
    },
    SectionStatus: {
        color: '#FDC32E',
        fontSize: 12
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold'
    }
});


const Nav = createStackNavigator()

export const ContestNav = () => {

    return (
        <Nav.Navigator>
            <Nav.Screen name={"BrowseContest"} component={BrowseContest} options={({ navigation, route }) => ({
                headerTitle: () => <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Browse Contests</Text>,
                headerStyle: { backgroundColor: '#0091ff' }
            })} />
            <Nav.Screen name={"ContestDetails"} component={ContestDetail} options={({ navigation, route }) => ({
                headerTitle: () => <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Contest Details</Text>,
                headerStyle: { backgroundColor: '#0091ff' }
            })} />
        </Nav.Navigator>
    )

}