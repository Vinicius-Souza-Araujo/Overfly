import { StatusBar } from 'expo-status-bar';
import {View,StyleSheet } from 'react-native';
import Rotas from './src/Rotas';

export default function App() {
  return (
    <View style={styles.container}>
      <Rotas />
      <StatusBar  style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6FB8E5',
    height:'100%',
    
    
    
  },
});






