import { StyleSheet, Text, View, Image } from 'react-native'

export function HomeScreen() {
  return (
    <View style={styles.container}> 
      <Text>Hola DHNR!</Text>
      <Image source={require('../assets/favicon.png')} />
      <Image
        source={{
          uri: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          width: 300,
          height: 300,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default HomeScreen
