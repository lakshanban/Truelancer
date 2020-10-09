import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    StatusBar, StyleSheet,
} from 'react-native';
import {ListItem, Avatar, Text, Button} from 'react-native-elements'


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
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                >

                    <View >
                        <View>
                            <Button
                                title="Filter"
                            />
                            <Button
                                title="Sort"
                            />
                        </View>

                    <View>
                        {
                            list.map((l, i) => (
                                <ListItem key={i} bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Title>{l.status}</ListItem.Title>
                                        <ListItem.Subtitle>{l.title}</ListItem.Subtitle>
                                        <ListItem.Subtitle>{l.entries}  <Text> | </Text>  {l.timeStamp}</ListItem.Subtitle>
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
            </SafeAreaView>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    }
});
export default BrowseContest;
