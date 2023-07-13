import { StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native'

import Card from '../components/Card'

export function HomeScreen() {
  return (
    <ScrollView>
      <StatusBar backgroundColor="darkorange" />
      <Text style={styles.text}>Home Screen</Text>
      <Card />
      <Card />
      <Card />
    </ScrollView>
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
