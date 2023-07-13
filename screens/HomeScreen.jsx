import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar, FlatList, SectionList } from 'react-native'

import Card from '../components/Card'

async function getAllCharacters() {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const data = await res.json()
  return data.results
}

export function HomeScreen() {
  const [charcters, setCharacters] = useState([])

  useEffect(() => {
    getAllCharacters().then((data) => setCharacters(data))
  }, [])
  return (
    <View>
      <StatusBar backgroundColor="darkorange" />
      <View>
        <Text style={styles.text}>Home Screen</Text>
      </View>
      <FlatList
        style={{ padding: 10 }}
        numColumns={2}
        ListEmptyComponent={<Text> No hay datos! </Text>}
        data={charcters}
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
})

export default HomeScreen
