import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

import Login from './Login';
import Cadastro from './Cadastro';

export default function Start({navigation}) {
  const [fontLoaded, setFontLoaded] = React.useState(false);


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
    <LinearGradient style={styles.container}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#C847FF','#ECBCFF', '#CC44FE']}>
        <Image style={styles.img} source={require('./assets/logo.png')} />
        <Text style={styles.texto}>
          Desbloqueie o poder das palavras e conquiste seu futuro no ENEM com nosso aplicativo!
        </Text>
        <StatusBar style="auto" />
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate(Login)}>
          <Text style={styles.txtbtn}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn1}
          onPress={() => navigation.navigate(Cadastro)}>
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
    marginTop: "-70%",
    width: "70%",
    fontSize: 27,
    fontFamily: 'Pompiere',
    textAlign: 'justify',
    textAlign: 'center',
    color: '#322D2D',
    textShadowColor: '#322D2D',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 1,
  },

  btn: {
    padding: 15,
    paddingHorizontal: 80,
    backgroundColor: '#ffffff',
    borderRadius: 37,
    borderColor: '#000',
    borderWidth: 2,
    marginTop: '25%',
    marginBottom: 10,
  },

  txtbtn: {
    fontFamily: 'Pompiere',
    fontSize: 30,
    color: '#D166FF',
    textAlign: 'center',
    textShadowColor: '#D166FF',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
  },

  btn1: {
    paddingVertical: 10,
  },

  txtbtn1: {
    fontFamily: 'Rosario',
    fontSize: 20,
    color: 'white',
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
  },
});