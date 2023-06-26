import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

export default function TelaInicial() {
  const [fontLoaded, setFontLoaded] = React.useState(false);
  const [buttonPressed, setButtonPressed] = React.useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      'Pompiere': require('./assets/fonts/Pompiere.ttf'),
      'Rosario': require('./assets/fonts/Rosario.ttf'),
    });

    setFontLoaded(true);
  }

  React.useEffect(() => {
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (

      <LinearGradient
        colors={['#D87CFF', '#ECBBFF', '#E399FF']}
        style={styles.container}
      >
        <Image style={styles.img} source={require('./assets/logo.png')} />

        <Text style={styles.texto}>
          Desbloqueie o poder das palavras e conquiste seu futuro no ENEM com nosso aplicativo!
        </Text>

        <StatusBar style="auto" />

        <TouchableOpacity
          style={[styles.btn, buttonPressed && styles.btnPressed]}
          onPress={() => setButtonPressed(!buttonPressed)}
        >
          <Text style={styles.txtbtn}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.txtbtn1}>não possui cadastro?</Text>
        </TouchableOpacity>
      </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    height: '70%',
    width: '140%',
    marginTop: 100,
  },
  texto: {
    marginTop: '-75%',
    width: '70%',
    fontSize: 19,
    textAlign: 'justify',
    textAlign: 'center',
    fontWeight: '400',
    color: '#322D2D',
  },
  btn: {
    padding: 10,
    paddingHorizontal: 80,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    borderColor: '#000',
    borderWidth: 2,
    marginTop: '25%',
    marginBottom: 10,
    transitionDuration: '0.1s',
  },
  txtbtn: {
    fontFamily: 'Pompiere',
    fontSize: 35,
  },
  txtbtn1: {
    fontFamily: 'Rosario',
    fontSize: 35,
  },
  btnPressed: {
    backgroundColor: '#000000',
  },
});
