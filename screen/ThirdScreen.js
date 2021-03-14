import React, {useEffect} from 'react';
import {View, Image, Text, StyleSheet, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});

function ThirdScreen(props) {
  const {title} = props.route.params;
  console.log(props);
  return (
    <View style={styles.container}>
      <Text>press the Button to go on fourth screen!</Text>
      <Text>{title}</Text>
      <Button
        title="Press me!"
        onPress={() => {
          props.navigation.navigate('FourthScreen');
        }}
      />
    </View>
  );
}

export default ThirdScreen;
