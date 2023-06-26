import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

import ConectivosInt from './ConectivosInt';
import ConectivosDes from './ConectivosDes';
import ConectivosConc from './ConectivosConc';


export default function Conectivos({navigation}) {
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
    
      <LinearGradient style={styles.container}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#D77DFE','#ECBBFF', '#DB78FF']}>

      <Image style={styles.img} source={require('./assets/LogoS.png')} />

      <StatusBar style="auto" />

      <View style={styles.botoes}>
          <Text style={styles.texto}>
            CONECTIVOS
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(ConectivosInt)}
            style={styles.btn}
            activeOpacity={0.8}>
            <Text style={styles.txtbtn}>INTRODUÇÃO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(ConectivosDes)}
            style={styles.btn}
            activeOpacity={0.8}>
            <Text style={styles.txtbtn}>DESENVOLVIMENTO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(ConectivosConc)}
            style={styles.btn}
            activeOpacity={0.8}>
            <Text style={styles.txtbtn}>CONCLUSÃO</Text>
          </TouchableOpacity>
      </View>
    </LinearGradient>
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
    marginTop: 100,
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

  botoes: {
    marginTop: 20,
  },

  btn: {
    padding: 20,
    paddingHorizontal: 40,
    backgroundColor: '#ffffff',
    borderRadius: 37,
    borderColor: '#000',
    borderWidth: 2,
    marginBottom: 20,
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
