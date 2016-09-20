import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Moment from 'moment';
import DayItem from './src/day-item';

// Create a react component
class WeekdaysApp extends Component {
  render() {
    return <View style={styles.container}>
      {this.days()}
    </View>
  }
  days() {
    var daysItems = [];

    for(var i = 0; i < 7; i++){
      var day = Moment().add(i, 'days').format('dddd');
      debugger;
      daysItems.push(
        <DayItem day={day} daysUntil={i} key={i} />
      )
    }

    return daysItems
  }
}

// Style the React component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Moves stuff height wise
    alignItems: 'center' // Moves stuff width wise
  }
});


// Show the react component on the screen
AppRegistry.registerComponent('weekdays', () => WeekdaysApp);