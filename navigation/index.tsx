import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import useColorScheme from "../hooks/useColorSchema";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Expense from "../components/Expense";
import { EmptyList } from "../components/Empty";
import AddExpenses from "../screens/AddExpenses";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}




export const HomeScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const description = route.params?.description;
  const amount = route.params?.amount;
  const [taskList, setTaskList] = useState<any>([]);

  useEffect(() => {

    if(description || amount){
      const tasks = [...taskList, { id:description+amount, description: description, amount: amount }]
      setTaskList([...new Map(tasks.map(item =>
        [item['id'], item])).values()]);
    }
  }, [description, amount]);


  const renderItem = ({ item }:{item:any}) => (
    <Expense description={item.description} amount={item.amount} />
  );


  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>HomeScreen</Text
      > */}
      <FlatList
        ListEmptyComponent={() => (<EmptyList/>) }
        data={taskList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.writeTaskWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate("AddExpenses")}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddExpenses" component={AddExpenses} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 20,
    right: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
