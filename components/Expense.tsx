import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Expense = ({ description, amount }: { description: any, amount:number }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.amount}>
        <Text>Amount</Text>
        <Text style={{textAlign:'center'}}>{amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    border:2,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
    borderColor:'#000',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'

  },
  description: {
    fontSize: 20,
  },
  amount:{
    fontSize: 20,
  }
});

export default Expense;
