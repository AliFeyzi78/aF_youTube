
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button, TextInput, } from 'react-native';


const App = () => {
  // const [outputText, setoutputText] = useState("open up App.js");
  // const [outNumber, setOutNumber] = useState(0);
  
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals=> [...currentGoals, enteredGoal]); 
    // console.log(enteredGoal);
  };

  return (

    <>
      <SafeAreaView style={{ flex: 1, padding:50 }}>

        <View style={{backgroundColor:'#c8b7b5'}}>
            <TextInput 
                style={styles.inputContainer}
                placeholder = " Course Goals...."
                onChangeText = {goalInputHandler}
                value={enteredGoal}
            />
            <Button 
                title="ADD"
                onPress={addGoalHandler}
            />
        </View>

        {/* <View style={styles.container}>
          <Text>{outputText}</Text>
          <Button
            style={styles.button}
            title="change Text"
            onPress={() => setoutputText('The text changed')} />
        </View> */}

        {/* <View style={styles.container}>
          <Text style={styles.numContainer}>Sayaç: {outNumber}</Text>
          <Button
            style={styles.button}
            title="Sayı Artır!!"
            onPress={() => setOutNumber(outNumber + 1)} />
        </View> */}

        <View>
          {courseGoals.map(goal => (
            <View key={goal} style={{backgroundColor:'#ffff6e', marginHorizontal:5}}>
            <Text>{goal}</Text>
            </View>
          ))}
        </View>

      </SafeAreaView>
    </>
  );
};



export default App;

const styles = StyleSheet.create({
  // numContainer: {
  //   fontSize: 45,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   justifyContent:'space-between'
  // },
  // container: {
  //   backgroundColor: 'red',
  //   padding: 8,
  //   margin: 5,
  //   borderRadius: 14,
  // },
  inputContainer: {
    // flex:1,
    // flexDirection:'row',
    backgroundColor: '#b2fab4',
    borderColor: "black", 
    borderRadius: 15, 
    borderWidth:5,
    padding:5,
    margin:5,
  },
})