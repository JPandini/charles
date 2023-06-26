import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

import DicasHome from './DicasHome'

export default function Dicas({ navigation }) {
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
        colors={['#D77DFE','#ECBBFF', '#D667FF']}>
      <View contentContainerStyle={styles.txtestContainer}>
        <View style={styles.innerContainer}>
          <Image style={styles.img} source={require('./assets/LogoS.png')} />
          <Text style={styles.texto}>Sobre o texto</Text>
          <Text style={styles.texto}>dissertativo-argumentativo:</Text>
          <Text style={styles.txtest}>
            <Text>ㅤㅤA estrutura da redação Enem segue o modelo do gênero textual dissertativo-argumentativo, que consiste na defesa de um ponto de vista por meio da discussão de argumentos e da análise crítica deles. Além disso, esse texto se caracteriza por uma estrutura dividida em <Text style={styles.txtverde}>introdução</Text>, <Text style={styles.txtverde}>desenvolvimento</Text> e <Text style={styles.txtverde}>conclusão</Text>.</Text>
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(DicasHome)}
            style={styles.btn}
            activeOpacity={0.8}>
            <Text style={styles.txtbtn}>➯</Text>
          </TouchableOpacity>
        </View>
      </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D166FF',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: '38%',
    width: '50%',
  },
  texto: {
    fontSize: 30,
    fontFamily: 'Learners',
    textAlign: 'center',
    textShadowColor: '#000000',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 1.3,
  },
  txtestContainer: {
    maxHeight: '230%',
    marginVertical: 30,
    paddingHorizontal: 20,
    borderColor: '#000',
  },
  txtest: {
    backgroundColor: '#fff',
    textAlign: 'justify',
    fontSize: 18,
    marginHorizontal: '8%',
    marginTop: '10%',
    padding: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
  txtverde: {
    color: '#090',
  },
  btn: {
    padding: 15,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    borderRadius: 40,
    borderColor: '#000',
    borderWidth: 2,
    marginTop: 30,
    marginBottom: 10,
  },
  txtbtn: {
    fontSize: 40,
    color: '#D166FF',
    textAlign: 'center',
    textShadowColor: '#D166FF',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
  },
});
