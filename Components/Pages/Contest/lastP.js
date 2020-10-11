import React, {PureComponent} from 'react';
import {View, Text, CheckBox, ScrollView, StyleSheet} from 'react-native';
import {Button, Card, Header} from 'react-native-elements';

export default class LastP extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      check1: false,
      check2: false,
      check3: false,
    };
  }

  checkBoxTest(val) {
    if (val == 'check') {
      this.setState({
        check: !this.state.check,
      });
    } else if (val == 'check1') {
      this.setState({
        check1: !this.state.check1,
      });
    } else if (val == 'check2') {
      this.setState({
        check2: !this.state.check2,
      });
    } else if (val == 'check3') {
      this.setState({
        check3: !this.state.check3,
      });
    }
  }

  render() {
    return (
      <ScrollView>
        <Header
          centerComponent={{
            text: 'Almost Done',

            style: {
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              fontStyle: 'italic',
            },
          }}
        />

        <View style={styles.vdirect}>
          <Card containerStyle={styles.fcard}>
            <View style={styles.vdirect}>
              <Text style={styles.mtext}>Prize Guranteed</Text>
              <View style={styles.vflex} />
              <CheckBox
                value={this.state.check}
                onValueChange={() => this.checkBoxTest('check')}
              />
            </View>
            <Text style={styles.dtext}>
              Gurantee freelancers that a winner will be chosen and awarded the
              prize. This will attract better entries from more freelancers.
              Moneyback gurantee is not applicable if a contest has a guranteed
              upgrade.
            </Text>
          </Card>
          <Card containerStyle={[styles.scard, {backgroundColor: 'yellow'}]}>
            <Text style={styles.ptext}>Free</Text>
          </Card>
        </View>
        <View style={styles.vdirect}>
          <Card containerStyle={styles.fcard}>
            <View style={styles.vdirect}>
              <Text style={styles.mtext}>Sealed</Text>
              <View style={styles.vflex} />
              <CheckBox
                value={this.state.check1}
                onValueChange={() => this.checkBoxTest('check1')}
              />
            </View>
            <Text style={styles.dtext}>
              Sealing the contest will prevent the participates from viewing
              each other's Entries and will make sure that the Entries your
              receive are original and unique.
            </Text>
          </Card>
          <Card containerStyle={[styles.scard, {backgroundColor: 'pink'}]}>
            <Text style={styles.ptext}>$ 30</Text>
          </Card>
        </View>
        <View style={styles.vdirect}>
          <Card containerStyle={styles.fcard}>
            <View style={styles.vdirect}>
              <Text style={styles.mtext}>Featured</Text>
              <View style={styles.vflex} />
              <CheckBox
                value={this.state.check2}
                onValueChange={() => this.checkBoxTest('check2')}
              />
            </View>
            <Text style={styles.dtext}>
              Featured contests attract more,higher-quality entries and are
              displayed prominently in contests List page.
            </Text>
          </Card>
          <Card containerStyle={[styles.scard, {backgroundColor: 'orange'}]}>
            <Text style={styles.ptext}>$ 16</Text>
          </Card>
        </View>
        <View style={styles.vdirect}>
          <Card containerStyle={styles.fcard}>
            <View style={styles.vdirect}>
              <Text style={styles.mtext}>Top Contest</Text>
              <View style={styles.vflex} />
              <CheckBox
                value={this.state.check3}
                onValueChange={() => this.checkBoxTest('check3')}
              />
            </View>
            <Text style={styles.dtext}>
              Get high quality entries! Top freelancers will be automattically
              invited join your contest.
            </Text>
          </Card>
          <Card containerStyle={[styles.scard, {backgroundColor: 'red'}]}>
            <Text style={styles.ptext}>$ 24</Text>
          </Card>
        </View>
        <Button title="Done" containerStyle={styles.btn} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  fcard: {
    width: '70%',
    marginRight: 0,
  },
  scard: {
    marginLeft: 0,
    flex: 1,
  },
  dtext: {
    flexDirection: 'row',
    textAlign: 'justify',
  },
  btn: {
    margin: 10,
  },
  ptext: {
    textAlign: 'center',
    marginTop: 50,
    fontWeight: 'bold',
    fontSize: 15,
  },
  vdirect: {
    flexDirection: 'row',
  },
  vflex: {
    flex: 1,
  },
  mtext: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
