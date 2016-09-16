import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const Navbar = () => {

  return (
    <View style={styles.navbarContainer}>
      <Text style={styles.navbarText}>
        ChatBot Syncano
      </Text>
    </View>
  );

};

const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: 'rgb(36, 66, 115)',
    height: 70,
    alignItems:'center'
  },
  navbarText: {
    fontSize: 30,
    color: '#fff',
    marginTop: 20
  }
});

export default Navbar;
