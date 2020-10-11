import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from 'react-native-elements'

export const JobDetails = ({ navigation }) => {

    return (
        <View>
            <View style={styles.firstlineContainer}>
                <View><Text style={styles.firstlineText}>Eshan Kavinda</Text></View>
                <View>
                    <Image source={require('../../icons/rating2.png')} style={{ width: 100, height: 20 }} />
                </View>
                <View><Text style={styles.firstlineText}>SOld 212</Text></View>
            </View>

            <View style={styles.secondBox}>
                <Text style={{ fontWeight: 'bold', fontSize: 15, padding: 20 }}>I will write blogposts and other articles to promote your products online</Text>
            </View>

            <View>
                <View><Text style={{ marginTop: 15, fontWeight: "bold", fontSize: 15, color: "#5e5d5d" }}>Posted on : 2020.06.10 10.30 AM</Text></View>
            </View>

            <View style={styles.detailContainer1}>
                <View style={styles.detailContainer2}>
                    <View style={styles.detailContainerSmall}><Text style={styles.textInBox}>Feedbacks</Text><Text style={styles.textInBox1}>3</Text></View>
                    <View style={styles.detailContainerSmall}><Text style={styles.textInBox2}>Days</Text><Text style={styles.textInBox1}>7</Text></View>
                    <View style={styles.detailContainerSmall}><Text style={styles.textInBox2}>Price</Text><Text style={styles.textInBox1}>$20</Text></View>
                </View>
            </View>

            <View style={styles.sellerContaainer}>
                <View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.sellerText}> Top rated Seller</Text>
                        <Image source={require('../../icons/us.png')} style={{ width: 25, height: 25, marginLeft: 10 }} />
                    </View>
                    <View>
                        <Text>Sold : 200 </Text>
                        <Text>Total earnings  : $2000 </Text>
                        <Text>Response Time : This seller will response within less than a day </Text>
                    </View>
                </View>
            </View>

            <View>
                <Button title={"Place order"} buttonStyle={{ marginBottom: 10, marginTop: 20, marginHorizontal: 20 }} onPress={() => { navigation.push('PlaceOrder') }} />
                <Button title={"Message Freelancer"} buttonStyle={{ marginHorizontal: 20, backgroundColor: 'green' }} />
            </View>

            <View style={styles.imageContainer}>
                <Image source={require('../../icons/truelancer.png')} style={styles.imageContainer} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    firstlineContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 20,
        paddingHorizontal: 10,
        backgroundColor: '#cccccc'

    },
    firstlineText: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#5e5d5d"
    },
    secondBox: {
        width: 300,
        height: 100,
        marginHorizontal: 50,
        backgroundColor: '#def7ff',
        marginTop: 50,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10
    },
    detailContainer1: {
        borderWidth: 3,
        borderColor: 'black',
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 20,
        height: 100
    },
    detailContainer2: {
        margin: 5,
        borderWidth: 2,
        borderColor: 'black',
        marginHorizontal: 20,
        borderRadius: 20,
        flexDirection: 'row',
        height: 80
    },
    detailContainerSmall: {
        margin: 5,
        borderWidth: 2,
        borderColor: 'black',
        marginHorizontal: 10,
        borderRadius: 20,
        width: 80,
        justifyContent: "center"
    },
    textInBox: {
        fontSize: 15,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center"
    },
    textInBox1: {
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20
    },
    textInBox2: {
        fontSize: 15,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20
    },
    sellerContaainer: {
        backgroundColor: '#f5fbff',
        height: 100,
        marginTop: 20,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 0.5,
        marginHorizontal: 20
    },
    imageContainer: {
        marginHorizontal: 20,
        marginLeft: 30,
        marginTop: 30,
        shadowColor: '#cccccc',
        shadowRadius: 10,
    },
    sellerText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 5,
        marginLeft: 5,
    }
})