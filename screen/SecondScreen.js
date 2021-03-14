import {useLinkProps} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Button,
  FlatList,
} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import ThirdScreen from './ThirdScreen';

//sescond component
function secondScreen(props) {
  //usestate hooks
  const [toggle, setToggle] = useState(false);

  //toogler function
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const thirdScreenNavigator = (title) =>
    props.navigation.navigate('ThirdScreen', {title});

  const renderList = (itemData) => {
    console.log(itemData);
    return (
      <TouchableOpacity
        style={styles.listItems}
        onPress={() => thirdScreenNavigator(itemData.item.title)}
        // onPress={() => props.navigation.navigate('ThirdScreen')}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
        {/* <ThirdScreen  data={itemData.item.title}    /> */}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={{height: 70, width: 85}}
          source={require('../assets/image.png')}
        />
        {/* <Button title="click" onPress={toggler} /> */}
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          onValueChange={toggler}
          value={toggle}
        />
      </View>
      {toggle ? (
        <FlatList
          numColumns={1}
          data={CATEGORIES}
          renderItem={renderList}
          keyExtractor={(item, index) => item.id}
        />
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 50,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listItems: {
    borderBottomWidth: 0.5,
    padding: 10,
    marginVertical: 10,
  },
  listView: {
    marginVertical: 20,
  },
});

export default secondScreen;
