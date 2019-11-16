import React, { useState } from "react";
import { StyleSheet, Button, View, FlatList } from "react-native";

const getRandomInt = (min, max) => () => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

const getRandomIntTo256 = getRandomInt(0, 256);

const generateRandomRgb = () =>
  `rgb(${getRandomIntTo256()}, ${getRandomIntTo256()}, ${getRandomIntTo256()})`;

const renderItem = ({ item }) => (
  <View key={item} style={{ height: 100, width: 100, backgroundColor: item }} />
);

const App = () => {
  const [colors, setColors] = useState<Array<string>>([]);
  return (
    <View style={styles.container}>
      <Button
        title="ADD COLOR"
        onPress={() => setColors(colors.concat(generateRandomRgb()))}
      />
      <FlatList
        data={colors}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  }
});

export default App;
