import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Card } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const JCard = ({ navigation }) => {
    return <TouchableOpacity onPress={() => { navigation.push('JobDetails') }}>

        <Card >
            <View style={styles.mainContainer}>

                <View>
                    <Text style={styles.cardTitle}>AWS cloud Engineer </Text>
                </View>

                <View style={styles.cardSecondLine}>
                    <View>
                        <Text>fixed price</Text>
                    </View>
                    <View>
                        <Text style={styles.timeContainer}>55mins ago</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <View style={styles.heartButton}>
                            <Image source={require('../../icons/heart.png')} style={{ height: 25, width: 25 }} />
                        </View>
                        <View style={styles.dislikeButton}>
                            <Image source={require('../../icons/dislike.png')} style={{ height: 25, width: 25 }} />
                        </View>
                    </View>
                </View>
                <View style={styles.doubleLine}>
                    <View style={styles.thirdLineContainer}>
                        <View>
                            <Text style={styles.priceText}>$800</Text>
                        </View>
                        <View>
                            <Text style={styles.budgetText}>Budget</Text>
                        </View>
                    </View>

                    <View style={styles.forthLineContainer}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Intermediate</Text>
                            <Text>Experience Level</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.fifthLineContainer}>
                    <Text>Create cloud website editor for cunstom built ....more </Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ backgroundColor: "#bebcf7", width: 50, padding: 3, marginTop: 3, borderWidth: 1, fontWeight: "bold", marginRight: 20 }}>AJAX</Text>
                        <Text style={{ backgroundColor: "#bebcf7", width: 100, padding: 3, marginTop: 3, borderWidth: 1, fontWeight: "bold", marginRight: 20 }}>JAVASCRIPT</Text>
                        <Text style={{ backgroundColor: "#bebcf7", width: 60, padding: 3, marginTop: 3, borderWidth: 1, fontWeight: "bold", marginRight: 20 }}>JQuery</Text>
                        <Text style={{ backgroundColor: "#bebcf7", width: 40, padding: 3, marginTop: 3, borderWidth: 1, fontWeight: "bold", marginRight: 20 }}>AWS</Text>
                    </View>
                    <View style={{ marginTop: 15, flexDirection: "row" }}>
                        <Image source={require('../../icons/check.png')} style={{ height: 25, width: 25 }} />
                        <Text style={{ color: "green" }}>payment Verified</Text>
                    </View>
                </View>

            </View>
        </Card>

    </TouchableOpacity>
}


const styles = StyleSheet.create({
    mainContainer: {
        paddingRight: 10,
        paddingBottom: 0,
        height: 250
    },
    cardTitle: {
        fontWeight: "bold",
        fontSize: 22,
        color: "#241fb8"
    },
    cardSecondLine: {
        flex: 4,
        flexDirection: "row",
        paddingTop: 7,
        paddingRight: 10,
        marginTop: 10,
        justifyContent: "space-between"

    },
    timeContainer: {
        color: 'grey'
    },
    jobTypeContainer: {

    },

    iconContainer: {
        flexDirection: "row",
        paddingRight: 20
    },

    dislikeButton: {
        paddingLeft: 20,


    },
    heartButton: {

    },
    thirdLineContainer: {
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: 10
    },
    priceText: {
        fontWeight: "bold",
        fontSize: 25
    },

    budgetText: {
        paddingTop: 0,
        color: "grey",
        fontWeight: "bold"
    },
    forthLineContainer: {
        flexDirection: "column",
        marginTop: 0,
        paddingTop: 0
    },
    doubleLine: {
        flex: 6,
        flexDirection: "row",
        paddingVertical: 20
    },
    fifthLineContainer: {
        flex: 12,
        flexDirection: "column"
    }
})