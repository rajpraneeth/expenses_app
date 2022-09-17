import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

const AddExpenses = ({ navigation }: { navigation: any }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <KeyboardAvoidingView>
      <View style={{ height:400,width:300,paddingTop:100 }} >
        <TextInput 
          style={styles.testStyle}
          placeholder='Enter Description'
          value={description}
          onChangeText={(text) => {
            setDescription(text);
          }}
        />
        <TextInput
        placeholder='Enter amount'
         style={styles.testStyle}
          value={amount}
          onChangeText={(text) => {
            setAmount(text);
          }}
          keyboardType='numeric'
        />
        <Button
          title="Add Expense"
          onPress={() => {
            navigation.navigate("Home", { description: description, amount: amount });
          }}
        />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddExpenses;

const styles = StyleSheet.create({
  testStyle:{
  height: 30, 
  width: "80%" , 
  borderBottomColor: 'gray',
  borderBottomWidth:2,
  marginBottom: 20,
  marginLeft: 30,
  paddingLeft:5
  
  }
  
});
