//imports
import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

//styling here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    paddingRight: 25,
  },

  texts: {
    fontSize: 25,
  },
  textContainer: {
    marginBottom: 70,
    marginTop: 30,
  },
  btn: {
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//first component
const FirstScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={{height: 150, width: 200}}
          source={require('../assets/konabosimg.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.texts}>Welcome to</Text>
        <Text style={styles.texts}>Konabos Experiance</Text>
        <Text style={styles.texts}>Edge for Content</Text>
        <Text style={styles.texts}>Hub</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SecondScreen')}
          style={styles.btn}
        >
          <Text> Lets go! </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default FirstScreen;
