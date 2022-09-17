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
        <TextInput
          placeholder="Write description"
          value={description}
          onChangeText={(text) => {
            setDescription(text);
          }}
        />
        <TextInput
          placeholder="Enter Amount"
          value={amount}
          onChangeText={(text) => {
            setAmount(text);
          }}
          keyboardType='numeric'
        />
        <Button
          title="Go to Home"
          onPress={() => {
            navigation.navigate("Home", { description: description, amount: amount });
          }}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddExpenses;

const styles = StyleSheet.create({});
