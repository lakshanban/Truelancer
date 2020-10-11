import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, Picker } from 'react-native'
import { Slider, Button } from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';




export const FilterPage = () => {

    const [value, setValue] = useState(0)
    const [checked, setChecked] = React.useState('first');

    return (
        <View>
            <View style={styles.sliderContainer}>
                <Slider value={value} onValueChange={setValue} />
            </View>
            <View style={styles.rateTextContainer}>
                <Text style={styles.rateText}>Hourly Rate : </Text>
                <View style={styles.priceContainer}>
                    <View>
                        <Image source={require('../../icons/money.png')} style={{ width: 40, height: 40 }} />
                    </View>
                    <View>
                        <Text style={styles.priceText}>{Math.round(value * 100)}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.countryContainer}>
                <View>
                    <Image source={require('../../icons/worldwide.png')} style={{ width: 25, height: 25, marginLeft: 10, marginRight: 15 }} />
                </View>
                <View>
                    <Text style={styles.countryText}>Country</Text>
                </View>
                <View>
                    <DropDownPicker
                        items={[
                            { label: 'UK', value: 'uk' },
                            { label: 'France', value: 'france' },
                        ]}
                        defaultValue={'france'}
                        containerStyle={{ height: 50, width: 250, marginLeft: 50, paddingBottom: 10 }}
                        style={{ backgroundColor: '#fafafa' }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                    />
                </View>
            </View>

            <View style={styles.countryContainer}>
                <View>
                    <Image source={require('../../icons/check.png')} style={{ width: 25, height: 25, marginLeft: 10, marginRight: 15 }} />
                </View>
                <View>
                    <Text style={styles.countryText}>Verified</Text>
                </View>
                <View>
                    <View>
                    </View>
                    <View>
                    </View>
                </View>
            </View>

            <View style={styles.countryContainer}>
                <View>
                    <Image source={require('../../icons/key-skills.png')} style={{ width: 25, height: 25, marginLeft: 10, marginRight: 15 }} />
                </View>
                <View>
                    <Text style={styles.countryText}>Skills</Text>
                </View>
                <View>
                    <DropDownPicker
                        items={[
                            { label: 'UK', value: 'uk' },
                            { label: 'France', value: 'france' },
                        ]}

                        containerStyle={{ height: 50, width: 250, marginLeft: 60, paddingBottom: 10 }}
                        style={{ backgroundColor: '#fafafa' }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                    />
                </View>
            </View>

            <View style={styles.countryContainer}>
                <View>
                    <Image source={require('../../icons/calendar.png')} style={{ width: 25, height: 25, marginLeft: 10, marginRight: 15 }} />
                </View>
                <View>
                    <Text style={styles.countryText}>Date</Text>
                </View>
                <View>
                    <DropDownPicker
                        items={[
                            { label: 'UK', value: 'uk' },
                            { label: 'France', value: 'france' },
                        ]}

                        containerStyle={{ height: 50, width: 250, marginLeft: 60, paddingBottom: 10 }}
                        style={{ backgroundColor: '#fafafa' }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                    />
                </View>
            </View>

            <View styles={styles.buttonContainer}>
                <Button title="Apply Filters" buttonStyle={{ marginTop: 100, marginHorizontal: 20 }} />
                <Button title="Cancel" buttonStyle={{ marginTop: 10, marginHorizontal: 20, backgroundColor: '#ba0c00' }} />
            </View>
        </View>)
}


const styles = StyleSheet.create({
    sliderContainer: {
        width: 430,
        paddingHorizontal: 100,
        paddingTop: 100
    },
    rateTextContainer: {
        paddingHorizontal: 140,
        paddingTop: 20
    },
    rateText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#0900b3"
    },
    priceContainer: {
        marginLeft: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly"

    },
    priceText: {
        fontSize: 30,
        fontWeight: "bold"
    },
    countryContainer: {
        flex: 2,
        flexDirection: "row",
        marginTop: 80
    },
    countryText: {
        fontWeight: "bold",
        fontSize: 15
    },
    buttonContainer: {
        width: 200
    }
})