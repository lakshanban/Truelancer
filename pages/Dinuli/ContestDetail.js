import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import {Image, SocialIcon} from "react-native-elements";
import {Colors} from "react-native/Libraries/NewAppScreen";

const ContestDetail: () => React$Node = () => {

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                >

                    <View style={styles.body}>

                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>
                                Contest Title
                            </Text>

                            <Text style={styles.sectionDescription}>
                                kjnskdnosdnfosidnfpsidnfpsdnfcskdcskjdcnsjdncsdjncoscnosdnco
                            </Text>
                            <Text>
                                Required skills
                                csdsdvdvsvs
                                vsv
                                svsfvsvfvsvf
                            </Text>
                            <Text>
                                Prize money     00.00
                            </Text>

                        </View>

                    </View>



                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    sectionContactDetails: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    sectionSocialMedia: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default ContestDetail;
