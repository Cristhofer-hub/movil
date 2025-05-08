import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hola Mundo</Text>
      <Image style={styles.imagen} source={{uri:"https://istpetonline.edu.ec/pluginfile.php/1/theme_klassroom/featuredpostimage/1720643456/on-line.png"}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width:250,
    height:150
  }
});
