import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

import Redacoes2018 from './Redacoes2018';
import Redacoes2019 from './Redacoes2019';
import Redacoes2020 from './Redacoes2020';
import Redacoes2021 from './Redacoes2021';
import Redacoes2022 from './Redacoes2022';

export default function Redacoes({navigation}) {
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
        colors={['#D77DFE','#ECBBFF', '#D667FF']}>
      <Image style={styles.img} source={require('./assets/LogoS.png')} />

      <StatusBar style="auto" />

      <View style={styles.botoes}>
          <Text style={styles.texto}>
            REDAÇÕES
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(Redacoes2018)}
            style={styles.btn}
            activeOpacity={0.8}>
            <Text style={styles.txtbtn}>2018</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(Redacoes2019)}
            style={styles.btn}
            activeOpacity={0.8}>
            <Text style={styles.txtbtn}>2019</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(Redacoes2020)}
            style={styles.btn}
            activeOpacity={0.8}>
            <Text style={styles.txtbtn}>2020</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(Redacoes2021)}
            style={styles.btn}
            activeOpacity={0.8}>
            <Text style={styles.txtbtn}>2021</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(Redacoes2022)}
            style={styles.btn}
            activeOpacity={0.8}>
            <Text style={styles.txtbtn}>2022</Text>
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
    padding: 15,
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
