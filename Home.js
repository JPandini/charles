import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

import Conectivos from './Conectivos';
import Dicas from './Dicas';
import Estrutura from './Estrutura';
import Redacoes from './Redacoes';
import Quiz from './Quiz';

export default function Home({navigation}) {
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
                MENU
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate(Conectivos)}
                style={styles.btn}
                activeOpacity={0.8}>
                <Text style={styles.txtbtn}>CONECTIVOS</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate(Redacoes)}
                style={styles.btn}
                activeOpacity={0.8}>
                <Text style={styles.txtbtn}>REDAÇÕES</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate(Estrutura)}
                style={styles.btn}
                activeOpacity={0.8}>
                <Text style={styles.txtbtn}>ESTRUTURA</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate(Dicas)}
                style={styles.btn}
                activeOpacity={0.8}>
                <Text style={styles.txtbtn}>DICAS</Text>
            </TouchableOpacity>

      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    padding: 17,
    paddingHorizontal: 60,
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
