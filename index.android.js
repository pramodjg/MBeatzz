/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Navigator
} from 'react-native';

var HomePage=require('./Views/HomePage');

var _navigator;

export default class MBeatzz extends Component {
  render() {
    return (

        <Navigator configureScene={this.configureScene} initialRoute={{ id: 'home' }}
          renderScene={(route, navigator) => this._renderScene(route, navigator)}
        />

    );
  }
  configureScene(route, routeStack){
   return Navigator.SceneConfigs.FadeAndroid
}

   _renderScene (route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'home':
        return (
          <HomePage navigator={navigator}/>
        )
    }
  }
}

AppRegistry.registerComponent('MBeatzz', () => MBeatzz);
