import React, { useContext } from 'react';
import { StyleSheet, View } from "react-native";
import { Router } from './Router';
import { CounterStoreContext } from './stores/CounterStores';



export const App = () => {

  const counterStore = useContext(CounterStoreContext);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Router />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  wrapper: {
    width: '100%',
    maxWidth: 425,
    backgroundColor: '#F5FCFF'
  }
});