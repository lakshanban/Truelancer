import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import {AppStyles} from "./AppStyles";
import {Button, Input} from "react-native-elements";

const EditProfile: () => React$Node = () => {

    return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>

                        <View style={styles.container}>
                            <View style={styles.InputContainer}>

                            </View>
                            <View style={styles.InputContainer}>
                                <Input
                                    style={styles.body}
                                    placeholder="Name"
                                    placeholderTextColor={AppStyles.color.grey}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View style={styles.InputContainer}>
                                <Input
                                    style={styles.body}
                                    placeholder="Location"
                                    placeholderTextColor={AppStyles.color.grey}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View style={styles.InputContainer}>
                                <Input
                                    style={styles.body}
                                    placeholder="Date of birth"
                                    placeholderTextColor={AppStyles.color.grey}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View style={styles.InputContainer}>
                                <Input
                                    style={styles.body}
                                    placeholder="Gender"
                                    placeholderTextColor={AppStyles.color.grey}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View style={styles.InputContainer}>
                                <Input
                                    style={styles.body}
                                    placeholder="Professional Title"
                                    placeholderTextColor={AppStyles.color.grey}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View style={styles.InputContainer}>
                                <Input
                                    style={styles.body}
                                    placeholder="Self introduction"
                                    secureTextEntry={true}
                                    placeholderTextColor={AppStyles.color.grey}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View style={styles.InputContainer}>
                                <Input
                                    style={styles.body}
                                    placeholder="Phone number"
                                    placeholderTextColor={AppStyles.color.grey}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View style={styles.InputContainer}>
                                <Input
                                    style={styles.body}
                                    placeholder="Email address"
                                    placeholderTextColor={AppStyles.color.grey}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View style={styles.InputContainer}>
                                <Input
                                    style={styles.body}
                                    placeholder="Skills"
                                    placeholderTextColor={AppStyles.color.grey}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View style={styles.InputContainer}>
                                <Input
                                    style={styles.body}
                                    placeholder="Work experience"
                                    placeholderTextColor={AppStyles.color.grey}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View style={styles.InputContainer}>
                                <Input
                                    style={styles.body}
                                    placeholder="Minimum hourly rate"
                                    placeholderTextColor={AppStyles.color.grey}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View style={styles.InputContainer}>
                                <Input
                                    style={styles.body}
                                    placeholder="Availability"
                                    placeholderTextColor={AppStyles.color.grey}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <Button
                                title="Save"
                                type="outline"
                            />
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
    },
    title: {
        fontSize: AppStyles.fontSize.title,
        fontWeight: "bold",
        color: AppStyles.color.tint,
        marginTop: 20,
        marginBottom: 20
    },
    leftTitle: {
        alignSelf: "stretch",
        textAlign: "left",
        marginLeft: 20
    },
    content: {
        paddingLeft: 50,
        paddingRight: 50,
        textAlign: "center",
        fontSize: AppStyles.fontSize.content,
        color: AppStyles.color.text
    },
    loginContainer: {
        width: AppStyles.buttonWidth.main,
        backgroundColor: AppStyles.color.tint,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        marginTop: 30
    },
    loginText: {
        color: AppStyles.color.white
    },
    placeholder: {
        fontFamily: AppStyles.fontName.text,
        color: "red"
    },
    InputContainer: {
        width: AppStyles.textInputWidth.main,
        marginTop: 10
    },
    body: {
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
        color: AppStyles.color.text
    },
    scrollView : {
    }
});

export default EditProfile;
