// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';


// //View -> UIView
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'

const App = () => {
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>Welcome to HealthLine</Text>
      <Image source={{uri: 'https://www.tc.columbia.edu/media/news/images/2020/may/covid-doctors-istock.jpg'}} style={styles.img}/>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
  },
  img: {
    width: 100,
    height: 100,
    //borderRadius: 100/2,
  }
});

export default App;
