import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

export default function Quiz({navigation}) {
  const [fontLoaded, setFontLoaded] = React.useState(false);


  async function loadFonts() {
    await Font.loadAsync({
      'Pompiere': require('./assets/fonts/Pompiere.ttf'),
      'Rosario': require('./assets/fonts/Rosario.ttf'),
      'Learners': require('./assets/fonts/Learners.ttf'),

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

    <View style={styles.container}>
      <Image style={styles.img} source={require('./assets/LogoS.png')} />

      <StatusBar style="auto" />

      <View style={styles.botoes}>
          <Text style={styles.texto}>
            QUIZ
          </Text>
          <Text style={styles.texto2}>Escolha sobre qual assunto</Text>
          <Text style={styles.texto2}>você deseja treinar!</Text>
          <View style={styles.botoes}>
            <TouchableOpacity
              onPress={() => navigation.navigate(Conectivos)}
              style={styles.btn}
              activeOpacity={0.8}>
              <Text style={styles.txtbtn}>INTRODUÇÃO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(Dicas)}
              style={styles.btn}
              activeOpacity={0.8}>
              <Text style={styles.txtbtn}>DESENVOLVIMENTO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(H)}
              style={styles.btn}
              activeOpacity={0.8}>
              <Text style={styles.txtbtn}>CONCLUSÃO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(Dicas)}
              style={styles.btn}
              activeOpacity={0.8}>
              <Text style={styles.txtbtn}>GRAMÁTICA</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(H)}
              style={styles.btn}
              activeOpacity={0.8}>
              <Text style={styles.txtbtn}>TEORIA</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D166FF',
  },

  img: {
    height: '20%',
    width: '40%',
    marginTop: 50,
  },

  texto: {
    fontSize: 50,
    fontFamily: 'Learners',
    textAlign: 'justify',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: '#000000',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 1,
  },

  texto2: {
    fontSize: 17,
    fontFamily: 'Rosario',
    fontWeight: 'light',
    textAlign: 'center',
    textShadowColor: '#000000',
  },

  botoes: {
    marginTop: 20,
  },

  btn: {
    padding: 18,
    paddingHorizontal: 40,
    backgroundColor: '#ffffff',
    borderRadius: 37,
    borderColor: '#000',
    borderWidth: 2,
    marginBottom: 15,
    marginTop: 5,
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
});
