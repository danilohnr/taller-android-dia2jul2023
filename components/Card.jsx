import { StyleSheet, Text, View, Image } from 'react-native'

export function Card({ name, image }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Image source={require('../assets/favicon.png')} />
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    backgroundColor: 'lightcyan',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: 10,
  },
  image: {
    borderRadius: 10,
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
