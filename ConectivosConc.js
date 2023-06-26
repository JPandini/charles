import { StatusBar } from 'expo-status-bar';
import React from 'react';
<<<<<<< HEAD
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
=======
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

>>>>>>> d497d4c4e7216fd0799a56e1d1421a64836c1a94

export default function ConectivosConc({ navigation }) {
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
<<<<<<< HEAD
    <SafeAreaView style={styles.container}>
      <LinearGradient style={styles.container}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#D77DFE','#ECBBFF', '#D667FF']}>
=======
    <LinearGradient style={styles.container}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#D77DFE','#ECBBFF', '#DB78FF']}>
    <SafeAreaView>
>>>>>>> d497d4c4e7216fd0799a56e1d1421a64836c1a94
      <ScrollView contentContainerStyle={styles.txtestContainer}>
        <View style={styles.innerContainer}>
          <Image style={styles.img} source={require('./assets/LogoS.png')} />
          <Text style={styles.texto}>CONECTIVOS{'\n'}CONCLUSÃO</Text>
          <Text style={styles.txtest}>
<<<<<<< HEAD
          <Text>
=======
            <Text>
>>>>>>> d497d4c4e7216fd0799a56e1d1421a64836c1a94
              Por issoㅤㅤㅤㅤㅤㅤㅤㅤ{'\n\n'}
              Assim{'\n\n'}
              Assim sendo{'\n\n'}
              Então{'\n\n'}
              Logo{'\n\n'}
              Enfim{'\n\n'}
              Portanto{'\n\n'}
              Em conclusão{'\n\n'}
              Em síntese{'\n\n'}
              Em resumo{'\n\n'}
              Em suma{'\n\n'}
              Para terminar{'\n\n'}
              Por último{'\n\n'}
              Resumidamente{'\n\n'}
              Desse modo{'\n\n'}
              Dessa forma{'\n\n'}
              Dessa maneira{'\n\n'}
              Destarte
            </Text>
          </Text>
        </View>
      </ScrollView>
<<<<<<< HEAD
      </LinearGradient>
    </SafeAreaView>
=======
    </SafeAreaView>
    </LinearGradient>
>>>>>>> d497d4c4e7216fd0799a56e1d1421a64836c1a94
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
    height: '15%',
    width: '50%',
    marginTop: -50,
  },
  texto: {
    fontSize: 50,
    fontFamily: 'Learners',
    textAlign: 'center',
    marginVertical: 10,
    textShadowColor: '#000000',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 1,
  },
  texto2: {
    fontSize: 15,
    fontFamily: 'Rosario',
    fontWeight: 'light',
    textAlign: 'center',
    textShadowColor: '#000000',
  },
  txtestContainer: {
<<<<<<< HEAD
    maxHeight: '250%',
=======
    maxHeight: '200%',
>>>>>>> d497d4c4e7216fd0799a56e1d1421a64836c1a94
    marginVertical: 30,
    paddingHorizontal: 30,
    borderColor: '#000',
  },
  txtest: {
    backgroundColor: '#fff',
    textAlign: 'justify',
    fontSize: 25,
    marginTop: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
<<<<<<< HEAD
});
=======
});
>>>>>>> d497d4c4e7216fd0799a56e1d1421a64836c1a94
