import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'


export const PaymentPage = ({ navigation }) => {

    const [payoneerIcon, setPayoneerIcon] = useState(<Image source={require('../../icons/check.png')} style={{ width: 30, height: 30, marginLeft: 50 }} />)
    const [paypalIcon, setPaypalIcon] = useState(<Image source={require('../../icons/check.png')} style={{ width: 30, height: 30, marginLeft: 69 }} />)
    const [cardIcon, setCardIcon] = useState(<Image source={require('../../icons/check.png')} style={{ width: 30, height: 30, marginLeft: 20 }} />)


    const transformIcon = (e) => {
        if (e === 1) {
            setCardIcon(<Image source={require('../../icons/docs.png')} style={{ width: 30, height: 30, marginLeft: 50 }} />)
        }
        if (e === 2) {
            setPaypalIcon(<Image source={require('../../icons/docs.png')} style={{ width: 30, height: 30, marginLeft: 80 }} />)
        }
        if (e === 3) {
            setPayoneerIcon(<Image source={require('../../icons/docs.png')} style={{ width: 30, height: 30, marginLeft: 80 }} />)
        }
    }


    return <View>
        <View>
            <Text style={styles.toText}>To Eshan Kavinda</Text>
        </View>
        <View style={styles.textInputContainer}>
            <TextInput style={styles.textInput} placeholder={"Enter your message"} />
        </View>

        <View>
            <Text style={styles.paymenOptionText}>Select Payment Option</Text>
            <View style={{ marginLeft: 50, marginTop: 20 }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View><Text style={{ fontSize: 15, fontWeight: "bold" }}>Card payment</Text></View>

                    {cardIcon}

                    <Image source={require('../../icons/visa.png')} style={{ width: 30, height: 30, marginLeft: 50 }} />
                    <Image source={require('../../icons/mastercard.png')} style={{ width: 30, height: 30, marginLeft: 5 }} />
                </View>

                <View style={{ flex: 1, flexDirection: "row", marginTop: 30 }}>
                    <View><Text style={{ fontSize: 15, fontWeight: "bold" }}>Paypal</Text></View>

                    {paypalIcon}


                    <Image source={require('../../icons/paypal.png')} style={{ width: 40, height: 40, marginLeft: 50 }} />
                </View>

                <View style={{ flex: 1, flexDirection: "row", marginTop: 30 }}>
                    <View><Text style={{ fontSize: 15, fontWeight: "bold" }}>Payoneer</Text></View>

                    {payoneerIcon}


                    <Image source={require('../../icons/symbols.png')} style={{ width: 40, height: 40, marginLeft: 50 }} />
                </View>
            </View>

            <View style={styles.orderDetailsContainer}>
                <Text style={{ margin: 20, fontWeight: "bold", fontSize: 15 }}>Order Details</Text>
                <Text style={{ color: "grey" }}> create cloud website editor for custom buld websites. create cloud website editor for custom buld websites. create cloud website editor for custom buld websites.</Text>
                <Text style={{ fontSize: 15, color: "blue" }}>More </Text>
            </View>
        </View>

        <View style={styles.moneyContainer}>
            <Image source={require('../../icons/money.png')} style={{ width: 50, height: 50 }} />
            <View>
                <Text style={{ fontSize: 35, fontWeight: "bold" }}> 100</Text>
            </View>
        </View>

        <Button title={"Purchase"} buttonStyle={{ marginTop: 70, marginHorizontal: 20, backgroundColor: 'green' }} />
    </View>
}

const styles = StyleSheet.create({
    toText: {
        fontSize: 17,
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 20
    },
    textInput: {
        borderColor: "black",
        borderWidth: 2,
        height: 100,
        fontWeight: "bold",
        backgroundColor: "#f0fcff"

    },
    textInputContainer: {
        borderWidth: 2,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 10,

    },
    paymenOptionText: {
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 20,
        marginLeft: 20
    },

    orderDetailsContainer: {
        backgroundColor: '#f0fcff',
        height: 150,
        marginTop: 80,
        marginHorizontal: 20,
        borderRadius: 15,
        borderWidth: 2
    },
    moneyContainer: {
        marginTop: 30,
        marginLeft: 130,
        flex: 1,
        flexDirection: "row"
    }
})