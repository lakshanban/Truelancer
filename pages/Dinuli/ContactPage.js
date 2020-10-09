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
                            <Text style={styles.sectionContactDetails}>
                                abc@gmil.com
                                hdc@gmail.com
                            </Text>
                            <Text style={styles.sectionSocialMedia}>
                                images
                            </Text>
                            <SocialIcon
                                //Social Icon using react-native-elements
                                type="twitter"
                                //Type of Social Icon
                            />
                            <SocialIcon
                                type="facebook"
                                onPress={() => {
                                    alert('facebook');
                                }}
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

export default ContactPage;
