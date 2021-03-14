import React from 'react';
import {View, Image, Text, StyleSheet, Button} from 'react-native';

function FourthScreen() {
  return (
    <View style={styles.container}>
      <Text>Waiting for new Text</Text>

      {/* <View>
          <Image
            style={{height: 100, width: 150}}
            source={require('../assets/konabosimg.png')}
          />
          <Text style={{fontSize: 40}}>Product title</Text>
        </View>
        <View>
          <Image
            style={{height: 150, width: 100}}
            source={require('../assets/fruitlemon.png')}
          />
          <Text style={{fontSize: 18}}>
            This classic lemon drink will get you going for the rest of the day.
          </Text>
        </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});

export default FourthScreen;
