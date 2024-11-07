import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Exercise = () => {
  return (
    <View style={[styles.parent, {marginTop: 30}]}>
      <View style={{backgroundColor: 'powderblue'}}>
        <Text style={[styles.child]}>Child One</Text>
      </View>

      <View style={{backgroundColor: 'skyblue'}}>
        <Text style={[styles.child]}>Child Two</Text>
      </View>

      <View style={{backgroundColor: 'steelblue'}}>
        <Text style={[styles.child]}>Child Three</Text>
      </View>
    </View>
  );
};
export default Exercise;

const styles = StyleSheet.create({
  parent: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#f5fcff',
      borderColor: '#0099aa',
      borderWidth: 5,
      justifyContent: 'space-around'
  },

  child: {
      borderWidth: 2,
      textAlign: 'center',
      fontSize: 24
  }
});
