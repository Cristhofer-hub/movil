import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>CALCULADORA IMC</Text>
      <Image style={styles.imagen} source={{uri:"https://istpetonline.edu.ec/pluginfile.php/1/theme_klassroom/featuredpostimage/1720643456/on-line.png"}}/>
      <TextInput style={styles.TextInput} keyboardType='numeric' placeholder='Ingrese su peso(kg)'></TextInput>
      <TextInput style={styles.TextInput} keyboardType='numeric' placeholder='Ingrese su altura(m)'></TextInput>
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
  },
  TextInput: {
    borderColor: "#000000",
    borderRadius: 3,
    borderWidth: 3
  }
});
