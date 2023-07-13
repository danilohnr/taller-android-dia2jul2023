import { StyleSheet, Text, View, Image } from 'react-native'

export function Card() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola DHNR!</Text>
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
    width: '80%',
    backgroundColor: 'lightcyan',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 10,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 4 / 4,
  },
  text: {
    fontSize: 20,
    backgroundColor: 'ghostwhite',
    color: 'navy',
  },
})

export default Card
