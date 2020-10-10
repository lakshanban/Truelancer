import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Image, SocialIcon} from "react-native-elements";

const ContactPage: () => React$Node = () => {

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>

                    <View style={styles.body}>

                        <View style={styles.sectionContainer}>
                            <Image
                                source={{ uri: 'https://www.top10freelancerwebsites.com/wp-content/uploads/2018/02/truelancer-1.png' }}
                                style={{ width: 350, height: 200 }}
                                resizeMode="contain"
                            />
                            <Text style={styles.sectionDescription}>
                                kjnskdnosdnfosidnfpsidnfpsdnfcskdcskjdcnsjdncsdjncoscnosdnco
                            </Text>
                            <View style={styles.sectionContactDetails}>
                                <Text>abc@gmil.com</Text>
                                <Text>abc@gmil.com</Text>
                                <Text>abc@gmil.com</Text>
                                <Text>abc@gmil.com</Text>
                            </View>

                            <SocialIcon
                                title='Sign In With Facebook'
                                button
                                type='facebook'
                            />

                            <SocialIcon
                                title='Some Twitter Message'
                                button
                                type='twitter'
                            />

                            <SocialIcon
                                button
                                type='medium'
                            />

                            <SocialIcon
                                button
                                light
                                type='instagram'
                            />

                        </View>

                    </View>

                </ScrollView>
            </SafeAreaView>
        </>
    );
};

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
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionContactDetails: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
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

export default ContactPage;
