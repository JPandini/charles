import { StatusBar } from 'expo-status-bar';
import React from 'react';
<<<<<<< HEAD
import { LinearGradient } from 'expo-linear-gradient';
=======
>>>>>>> d497d4c4e7216fd0799a56e1d1421a64836c1a94
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

export default function ConectivosInt({ navigation }) {
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
    <SafeAreaView style={styles.container}>
<<<<<<< HEAD
      <LinearGradient style={styles.container}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#D77DFE','#ECBBFF', '#D667FF']}>
=======
>>>>>>> d497d4c4e7216fd0799a56e1d1421a64836c1a94
      <ScrollView contentContainerStyle={styles.txtestContainer}>
        <View style={styles.innerContainer}>
          <Image style={styles.img} source={require('./assets/LogoS.png')} />
          <Text style={styles.texto}>CONECTIVOS{'\n'}INTRODUÇÃO</Text>
          <Text style={styles.txtest}>
            <Text>
                Primeiramente {'\n\n'}
                Em primeiro lugar{'\n\n'}
                Acima de tudo{'\n\n'}
                Para começar{'\n\n'}
                Sobretudo{'\n\n'}
                Principalmente{'\n\n'}
                Primordialmente{'\n\n'}
                Inicialmente{'\n\n'}
                É fato que{'\n\n'}
                No panorama atual{'\n\n'}
                Muito se discute sobre{'\n\n'}
                No contexto atual{'\n\n'}
                Conforme os últimos dados{'\n\n'}
                Primordialmente</Text>
          </Text>
        </View>
      </ScrollView>
<<<<<<< HEAD
      </LinearGradient>
=======
>>>>>>> d497d4c4e7216fd0799a56e1d1421a64836c1a94
    </SafeAreaView>
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
    height: '20%',
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
    maxHeight: '200%',
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
});
