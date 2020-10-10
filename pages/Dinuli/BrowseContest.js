import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    StatusBar, StyleSheet,
} from 'react-native';
import {ListItem, Text, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

const BrowseContest: () => React$Node = () => {


    const list = [
        // {
        //     name: 'Amy Farha',
        //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        //     subtitle: 'Vice President'
        // },
        // {
        //     name: 'Chris Jackson',
        //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        //     subtitle: 'Vice Chairman'
        // },
        // {
        //     name: 'Amy Farha',
        //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        //     subtitle: 'Vice President'
        // },
        // {
        //     name: 'Chris Jackson',
        //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        //     subtitle: 'Vice Chairman'
        // },
        // {
        //     name: 'Amy Farha',
        //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        //     subtitle: 'Vice President'
        // },
        // {
        //     name: 'Chris Jackson',
        //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        //     subtitle: 'Vice Chairman'
        // },
        // {
        //     name: 'Amy Farha',
        //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        //     subtitle: 'Vice President'
        // },
        // {
        //     name: 'Chris Jackson',
        //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        //     subtitle: 'Vice Chairman'
        // }, {
        //     name: 'Amy Farha',
        //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        //     subtitle: 'Vice President'
        // },
        // {
        //     name: 'Chris Jackson',
        //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        //     subtitle: 'Vice Chairman'
        // }, {
        //     name: 'Amy Farha',
        //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        //     subtitle: 'Vice President'
        // },
        // {
        //     name: 'Chris Jackson',
        //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        //     subtitle: 'Vice Chairman'
        // }, {
        //     name: 'Amy Farha',
        //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        //     subtitle: 'Vice President'
        // },
        // {
        //     name: 'Chris Jackson',
        //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        //     subtitle: 'Vice Chairman'
        // }, {
        //     name: 'Amy Farha',
        //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        //     subtitle: 'Vice President'
        // },
        // {
        //     name: 'Chris Jackson',
        //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        //     subtitle: 'Vice Chairman'
        // },
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
                                        name="arrow-right"
                                        size={15}
                                        color="white"
                                    />
                                }
                            />
                            <Button
                                title="Filter"
                                type="clear"
                                icon={
                                    <Icon
                                        name="arrow-right"
                                        size={15}
                                        color="white"
                                    />
                                }
                            />
                        </View>

                    <View
                        const path
                    >
                        {
                            list.map((l, i) => (
                                <ListItem key={i} bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Title style={styles.SectionStatus}>{l.status}</ListItem.Title>
                                        <ListItem.Subtitle style={styles.sectionTitle}>{l.title}</ListItem.Subtitle>
                                        <ListItem.Subtitle>{l.entries}  <Text>  | </Text>  {l.timeStamp}</ListItem.Subtitle>
                                        <ListItem.Content>
                                            <Text>{l.price}</Text>
                                        </ListItem.Content>

                                    </ListItem.Content>
                                </ListItem>
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
    sectionFilter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 60
    },
    SectionStatus : {
        color: '#FDC32E',
        fontSize: 12
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold'
    }
});
export default BrowseContest;
