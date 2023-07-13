import { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  FlatList,
  SectionList,
  TextInput,
} from 'react-native'

import Card from '../components/Card'

async function getAllCharacters() {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const data = await res.json()
  return data.results
}

export function HomeScreen() {
  const [filter, setFilter] = useState('')
  const [characters, setCharacters] = useState([])
  const [filteredCharacters, setFilteredCharacters] = useState([])

  useEffect(() => {
    getAllCharacters().then((data) => setCharacters(data))
  }, [])

  useEffect(() => {
    setFilteredCharacters(
      characters.filter((character) => {
        return character.name.toLowerCase().includes(filter.toLowerCase())
      })
    )
  }, [filter])

  return (
    <View>
      <StatusBar backgroundColor="darkorange" />
      <View>
        <Text style={styles.text}>Home Screen</Text>
        <TextInput style={styles.input} placeholder="Buscar" onChange={(text) => setFilter(text)} />
      </View>
      <FlatList
        style={{ padding: 10 }}
        numColumns={2}
        ListEmptyComponent={<Text> No hay datos! </Text>}
        data={filteredCharacters}
        renderItem={({ item }) => <Card name={item.name} image={item.image} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    backgroundColor: 'ghostwhite',
    color: 'navy',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 8,
  },
})

export default HomeScreen
