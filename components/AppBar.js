import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const AppBar = ({ title }) => {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.appBar}>
      <Text style={styles.title}>{title}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#6200ea',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
});

export default AppBar;
