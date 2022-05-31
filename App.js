//Ravindra Nakarani

import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Alert } from 'react-native';
import OkGesturePassword from "react-native-ok-gesture-password";
import Button from 'react-native-smart-button';

type
Props = {};
export default class App extends Component<Props> {

  state = {
    isWarning: false,
    password: '',
    thumbnails: [],
    message: 'Verify your gesture password',
    messageColor: '#A9A9A9',
    point1: "#FFFFFF",
    point2: "#FFFFFF",
    point3: "#FFFFFF",
    point4: "#FFFFFF",
    point5: "#FFFFFF",
    point6: "#FFFFFF",
    point7: "#FFFFFF",
    point8: "#FFFFFF",
    point9: "#FFFFFF",
  };
  _cachedPassword = ''
  
  componentDidMount() {
    this._cachedPassword = '01234' //get cached gesture password
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 70, marginTop: 10 }}>
          <View style={styles.headContent}>
            <View style={[styles.headCircle, { backgroundColor: this.state.point1 }]} />
            <View style={[styles.headCircle, { backgroundColor: this.state.point2 }]} />
            <View style={[styles.headCircle, { backgroundColor: this.state.point3 }]} />
          </View>
          <View style={styles.headContent}>
            <View style={[styles.headCircle, { backgroundColor: this.state.point4 }]} />
            <View style={[styles.headCircle, { backgroundColor: this.state.point5 }]} />
            <View style={[styles.headCircle, { backgroundColor: this.state.point6 }]} />
          </View>
          <View style={styles.headContent}>
            <View style={[styles.headCircle, { backgroundColor: this.state.point7 }]} />
            <View style={[styles.headCircle, { backgroundColor: this.state.point8 }]} />
            <View style={[styles.headCircle, { backgroundColor: this.state.point9 }]} />
          </View>
        </View>
        <OkGesturePassword
          style={styles.gesturePassword}
          pointBackgroundColor={'white'}
          isWarning={this.state.isWarning}
          showArrow={false}
          color={'#1F67B9'}
          activeColor={'#1F67B9'}
          warningColor={'red'}
          warningDuration={0}
          allowCross={false}
          onMove={(p) => {
            console.log("onMove:" + p);
            this._changeHeadPoint(p);
          }}
          // onReset={this._onReset}
          // onFinish={(password) => {
          //   Alert.alert("Password", password);
          //   this._resetHeadPoint();
          // }}
          onFinish={this._onFinish}
        />
      </View>
    );
  }

  // _onReset = () => {
  //   let isWarning = false
  //   //let password = ''
  //   let message = 'Verify your gesture password'
  //   let messageColor = '#A9A9A9'
  //   this.setState({
  //     isWarning,
  //     //password,
  //     message,
  //     messageColor,
  //   })
  // }

  _onFinish = (password) => {
    if (password === this._cachedPassword) {
      let isWarning = false
      // let message = 'Verify succeed'
      // let messageColor = '#00AAEF'
      Alert.alert('Verify succeed')
      this.setState({
        isWarning,
        password,
        // message,
        // messageColor,
      })
    }
    else {
      let isWarning = true
      // let message
      // let messageColor = 'red'
      if (password.length < 4) {
        // message = 'Need to link at least 4 points'
        Alert.alert('Need to link at least 4 points')
      }
      else {
        Alert.alert('Verify failed')
        // message = 'Verify failed'
      }
      this.setState({
        isWarning,
        password,
        // message,
        // messageColor,
      })
    }
    this._resetHeadPoint();
    // Alert.alert('password is ' + password)
  }

  _renderDescription = () => {
    return (
      <View style={{ height: 158, paddingBottom: 10, justifyContent: 'flex-end', alignItems: 'center', }}>
        {this._renderThumbnails()}
        <Text
          style={{ fontFamily: '.HelveticaNeueInterface-MediumP4', fontSize: 14, marginVertical: 6, color: this.state.messageColor }}>{this.state.message}</Text>
      </View>
    )
  }
  _renderThumbnails() {
    let thumbnails = []
    for (let i = 0; i < 9; i++) {
      let active = ~this.state.password.indexOf(i)
      thumbnails.push((
        <View
          key={'thumb-' + i}
          style={[
            { width: 8, height: 8, margin: 2, borderRadius: 8, },
            active ? { backgroundColor: '#00AAEF' } : { borderWidth: 1, borderColor: '#A9A9A9' }
          ]}
        />
      ))
    }
    return (
      <View style={{ width: 38, flexDirection: 'row', flexWrap: 'wrap' }}>
        {thumbnails}
      </View>
    )
  }


  _renderActions = () => {
    return (
      <View
        style={{ position: 'absolute', bottom: 0, flex: 1, justifyContent: 'space-between', flexDirection: 'row', width: Dimensions.get('window').width, }}>
        <Button
          style={{ margin: 10, height: 40, justifyContent: 'center', }}
          textStyle={{ fontSize: 14, color: '#A9A9A9' }}>
          Forget password
        </Button>
        <Button
          style={{ margin: 10, height: 40, justifyContent: 'center', }}
          textStyle={{ fontSize: 14, color: '#A9A9A9' }}>
          Login other accounts
        </Button>
      </View>
    )
  }

  _resetHeadPoint = () => {
    this.setState({
      point1: "#FFFFFF",
      point2: "#FFFFFF",
      point3: "#FFFFFF",
      point4: "#FFFFFF",
      point5: "#FFFFFF",
      point6: "#FFFFFF",
      point7: "#FFFFFF",
      point8: "#FFFFFF",
      point9: "#FFFFFF",
    });
  };

  _changeHeadPoint = (point) => {
    switch (point + 1) {
      case 1:
        this.setState({
          point1: '#1F67B9'
        });
        break;
      case 2:
        this.setState({
          point2: '#1F67B9'
        });
        break;
      case 3:
        this.setState({
          point3: '#1F67B9'
        });
        break;
      case 4:
        this.setState({
          point4: '#1F67B9'
        });
        break;
      case 5:
        this.setState({
          point5: '#1F67B9'
        });
        break;
      case 6:
        this.setState({
          point6: '#1F67B9'
        });
        break;
      case 7:
        this.setState({
          point7: '#1F67B9'
        });
        break;
      case 8:
        this.setState({
          point8: '#1F67B9'
        });
        break;
      case 9:
        this.setState({
          point9: '#1F67B9'
        });
        break;

    }
  };

}

const styles = StyleSheet.create({
  gesturePassword: {
    backgroundColor: 'white',
  },
  headContent: {
    flex: 1, justifyContent: 'center', flexDirection: 'row'
  },
  headCircle: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#1F67B9",
    width: 15,
    height: 15,
    margin: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});