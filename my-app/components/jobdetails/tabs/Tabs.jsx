import React, { useState } from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";

function TabButton({ name, activeTab, onHandleSearchType }) {
  return (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
} 

const Tabs = () => {
  return (
    <View>
      <Text>Tabs</Text>
    </View>
  )
}

export default Tabs