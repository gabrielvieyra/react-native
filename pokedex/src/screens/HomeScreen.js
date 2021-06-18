import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TextInput, StyleSheet} from 'react-native';

function HomeScreen() {
  const [inputValue, setInputValue] = useState('');
  const [pokemons, setPokemons] = useState([]);

  async function fetchData() {
    const getData = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const getJson = await getData.json();

    setPokemons(getJson.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={text => setInputValue(text)}
        value={inputValue}
        style={styles.input}
      />
      <FlatList
        data={pokemons.filter(pokemon => {
          return pokemon.name.toLowerCase().includes(inputValue.toLowerCase());
        })}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    fontSize: 16,
    paddingHorizontal: 16,
  },
});

export default HomeScreen;
