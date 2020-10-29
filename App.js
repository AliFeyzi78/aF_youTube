
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';


const App = () => {
  const [outputText, setoutputText] = useState ("open up App.js");

  return (
    <>
      <SafeAreaView>
        <Text>{outputText}</Text> 
        <Button 
          title="change Text"
          onPress = {() => setoutputText('The text changed')} />      
      </SafeAreaView>
    </>
  );
};



export default App;
