import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import {Button} from "react-native-elements";
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
                            <View style={styles.sectionFlex}>
                                <View  style={{flex: 1}}>
                                    <Text
                                        style={styles.TextFlexLeft}
                                    >Activity status</Text>

                                </View>
                                <View  style={{flex: 1}}>
                                    <Text
                                        style={styles.TextFlexRight}
                                    >Time stamp</Text>

                                </View>
                            </View>

                            <View>
                                <Text style={styles.sectionTitle}>
                                    Contest Title
                                </Text>

                                <Text style={styles.sectionDescription}>
                                    kjnskdnosdnfosidnfpsidnfpsdnfcskdcskjdcnsjdncsdjncoscnosdnco
                                </Text>
                            </View>


                            <View style={{styles: styles.sectionSkill}}>
                                <Text style={styles.sectionHeading}>
                                    Required skills
                                </Text>
                                <Text>
                                    csdsdvdvsvs
                                </Text>
                                <Text>
                                    csdsdvdvsvs
                                </Text>
                                <Text>
                                    csdsdvdvsvs
                                </Text>

                            </View>

                            <View style={styles.sectionFlex}>
                                <View  style={{flex: 1, padding: 5}}>
                                    <Text
                                        style={styles.TextFlexLeft}
                                    >
                                        Prize money
                                    </Text>
                                </View>
                                <View  style={{flex: 1, padding: 10}}>
                                    <Text
                                        style={styles.TextFlexRight}
                                    >
                                        00.00
                                    </Text>
                                </View>
                            </View>


                            <View style={styles.sectionEntries}>
                                <View style={styles.sectionFlex}>
                                    <View  style={{flex: 1}}>
                                        <Text
                                            style={styles.TextFlexLeft}
                                        >
                                            Entries
                                        </Text>
                                    </View>
                                    <View  style={{flex: 1}}>
                                        <Text
                                            style={styles.TextFlexRight}
                                        >
                                            100
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.sectionFlex}>
                                    <View  style={{flex: 1}}>
                                        <Text
                                            style={styles.TextFlexLeft}
                                        >
                                            Pending Entries
                                        </Text>
                                    </View>
                                    <View  style={{flex: 1}}>
                                        <Text
                                            style={styles.TextFlexRight}
                                        >
                                            100
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <Button
                                style={styles.sectionContainer}
                                title="COMMIT ENTRY"
                            />
                            <Text style={styles.SectionStatus}>Guarantee status</Text>

                            <View style={styles.sectionUser}>
                                <Text style={styles.sectionHeading}>
                                    Posted by
                                </Text>
                                <Text style={styles.sectionContactDetails}>
                                    ncedncpencpe
                                </Text>
                                <Text>
                                    csdsdvdvsvs
                                </Text>
                                <Text>
                                    csdsdvdvsvs
                                </Text>
                                <Text>
                                    csdsdvdvsvs
                                </Text>

                            </View>

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
        paddingLeft: 20,
        paddingRight: 20

    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 5
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
        paddingTop: 20,
        paddingBottom: 20
    },
    sectionHeading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.black,
    },
    sectionEntries: {
        borderWidth: 1,
        borderColor: '#E8F5FF',
        backgroundColor: '#E8F5FF',
        marginBottom: 10,
        marginTop: 10,
        padding: 15
    },
    sectionFlex: {
        flexDirection:"row"
    },
    TextFlexLeft : {
        justifyContent: 'flex-start',
    },
    TextFlexRight:{
        justifyContent: 'flex-end',
        paddingLeft: 90
    },
    sectionSkill:{
        padding: 15,
        marginBottom: 20
    },
    sectionUser:{
        paddingTop: 20,
    },
    SectionStatus: {
        textAlign: 'right',
        color: '#FDC32E'
    },
    sectionContactDetails: {
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
},


    );

export default ContestDetail;
