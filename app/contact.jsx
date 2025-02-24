import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import coffeeSplash from '@/assets/images/coffee-splash.png';
import { Stack } from 'expo-router';


const explore = () => {
  return (
    <View style={styles.container}>
      {/* If this is used it will overwrite the _layout.tsx Stack screen */}
      {/* <Stack.Screen name="contact" options={{ title: 'Contact Me', headerShown: true }} /> */}
      <ImageBackground
      source={coffeeSplash}
      style={styles.image}
      resizeMode='cover'>
        <Text style={
          styles.text
        }>Explore</Text>
      </ImageBackground>
    </View>
  )
}

export default explore;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    flex: 1
  },
  text:{
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    textAlign: 'center',
    fontSize: 42,
    fontWeight: 'bold'
  }
});