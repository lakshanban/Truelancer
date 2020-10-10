import React, { PureComponent } from 'react';
import { } from 'react-native';
import { Button, Header } from 'react-native-elements';

export default class LastP extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
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
        <Button title='Done' />
      </>
    );
  }
}
