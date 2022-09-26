//https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmi-m.htm
// import { StatusBar } from 'expo-status-bar';

import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  Switch,
} from "react-native";

export default function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [category, setCategory] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  // const [lbs, setLbs] = useState(0);
  // const [inch, setInch] = useState(0)

  return (
    <View
      style={{
        textAlign: "center",
        flex: 1,
        justifyContent: "center",
        // placeholder: "Please enter your height in cm"
        // alignItems: "center",
      }}
    >
      <Text style={{ textAlign: "center" }}>BMI calculator. </Text>
      <Text style={{ textAlign: "center" }}>
        Please select the unit first. switch on for lbs/inchs.{" "}
      </Text>

      <Switch
        style={styles.edit}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        // onChange ={(isEnabled)=>setIsEnabled(true)}
      />
      <TextInput
        style={styles.edit}
        onChangeText={(height) => setHeight(height)}
        clearTextOnFocus="true"
        value={height}
        // placeholder:"Please enter your weight in "
      />
      <Text style={{ textAlign: "center" }}> Height: {height} </Text>
      <TextInput
        style={styles.edit}
        onChangeText={(weight) => setWeight(weight)}
        clearTextOnFocus="true"
        value={weight}
      />

      <Text style={{ textAlign: "center" }}>Weight: {weight} </Text>

      <Button
        onPress={(newBmi) => {
          let heightInM;
          let newHeight;
          let newWeight;
          // let lbs
          // let inch

          if (isEnabled == false) {
            heightInM = height / 100;
            newHeight = heightInM * heightInM;
            newBmi = weight / newHeight;
            setBmi(newBmi);
          } else if (isEnabled == true) {
            newWeight = weight * 0.453592;
            heightInM = height * 0.0254;
            newHeight = heightInM * heightInM;
            newBmi = newWeight / newHeight;

            console.log(heightInM);
            //  console.log(newBmi)
            setBmi(newBmi);
          }
          // 62.59843     136.687
          if (newBmi < 18.5) {
            // category = "underweight";
            setCategory("underweight");
          } else if (newBmi >= 18.5 && newBmi < 25) {
            // category = "norml weight";
            setCategory("norml weight");
          } else if (newBmi >= 25 && newBmi < 30) {
            {
              // category = "overweight";
              setCategory("overweight");
            }
          } else if (newBmi >= 30) {
            // category = "obesity"
            setCategory("obesity");
          }
          console.log("highet in meter", heightInM);
          console.log("weight", weight);
          console.log("newBMI", newBmi);
          console.log("bmi", bmi);
        }}
        title="Submit"
        color="#841584"
        accessibilityLabel="Label"
      />
      <Text
        style={{
          textAlign: "center",
        }}
      >
        Your BMI is {bmi} .
      </Text>
      <Text style={{ textAlign: "center" }}> Your category is {category} </Text>
      <Text style={{ textAlign: "center" }}>
        {
          "\n BMI Categories:\n\
Underweight = <18.5\n\
Normal weight = 18.5–24.9 \n\
Overweight = 25–29.9 \n\
Obesity = BMI of 30 or greater\n"
        }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  edit: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
    height: 40,
    margin: 12,
    padding: 10,
  },
});
