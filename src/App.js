import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Platform,
} from 'react-native';
import CustomInput from "./Component/Input/Input";

class App extends Component {

  render() {
    return (
      <View>
        <CustomInput
            onChange={(value,state)=>console.log(value+' >> '+state)}
            disableEmail={true}
            labelTitle="Enter guest's Phone Number"
            style={{flex: 1,
              backgroundColor: 'white',
              alignItems: 'center',
              color:'#3c3c3c',
              fontSize:18,
              fontFamily:'Nunito',
              justifyContent: 'center',}}
        />
      </View>
    );
  }
}

let hotWrapper = () => () => App;
if (Platform.OS === 'web') {
  const { hot } = require('react-hot-loader');
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
