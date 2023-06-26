import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

export default function Estrutura({ navigation }) {
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
      <LinearGradient style={styles.container}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#D77DFE','#ECBBFF', '#D667FF']}>
      <ScrollView contentContainerStyle={styles.txtestContainer}>
        <View style={styles.innerContainer}>
          <Image style={styles.img} source={require('./assets/LogoS.png')} />
          <Text style={styles.texto}>ESTRUTURA</Text>
          <Text style={styles.texto2}>modelo de redação {'\n'}feito por@ F 3 L I P E A R A U J O</Text>
          <Text style={styles.txtest}>
            <Text>ㅤㅤO filósofo brasileiro Raimundo Teixeira Mendes, em 1889, adaptou o lema positivista "Ordem e Progresso" não só para a Bandeira Nacional, mas também para a nação que, no contexto hodierno, enfrenta significativos estorvos para o seu desenvolvimento. Lamentavelmente, entre eles, o (TEMA) representa uma antítese à máxima do símbolo pátrio, uma vez que tal postura resulta na desordem e no retrocesso do desenvolvimento social. Esse lastimável panorama é calcado na inoperância estatal e tem como consequência o (ARG. 2). {'\n\n'}
            ㅤㅤDe início, há de se constatar a débil ação do Poder Público enquanto mantenedora da problemática. Acerca disso, o filósofo inglês Thomas Hobbes, em seu livro "Leviatã", defende a incumbência do Estado em proporcionar meios que auxiliem o progresso da coletividade. As autoridades, contudo, vão de encontro com a ideia de Hobbes, uma vez que possuem um papel inerte em relação ao PROBLEMA. Esse cenário decorre do fato de que, assim como pontuou o economista norte-americano Murray Rothbard, uma parcela dos representantes governamentais, ao se orientar por um viés individualista e visar a um retorno imediato de capital político, negligencia a conservação de direitos sociais indispensáveis, como o DIREITO NEGLIGENCIADO. Logo, é notório que a omissão do Estado perpetua o PROBLEMA no Brasil.{'\n\n'}
            ㅤㅤPor conseguinte, engendra-se a (ARG. 2 (consequência)). Posto isso, de acordo com (Repertório: dados estatísticos/percentuais). Diante de tal exposto, (APROFUNDAMENTO ARGUMENTATIVO). Logo, é inadmissível que esse cenário continue a perdurar.{'\n\n'}
            ㅤㅤDepreende-se, portanto, que é mister a atuação governamental no PROBLEMA. Assim, a fim de (FINALIDADE), cabe ao Poder Executivo           Federal, mais especificamente ao Ministério X, (AÇÃO). Tal ação deverá ocorrer por meio da (MEIO/MODO). Somente assim, com a conjuntura           de tais ações, os brasileiros verão o progresso referido na Bandeira Nacional Brasileira como uma realidade.</Text>
          </Text>
        </View>
      </ScrollView>
      </LinearGradient>
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
    height: '15%',
    width: '50%',
    marginTop: -50,
  },
  texto: {
    fontSize: 40,
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
    maxHeight: '230%',
    marginVertical: 30,
    paddingHorizontal: 30,
    borderColor: '#000',
  },
  txtest: {
    backgroundColor: '#fff',
    textAlign: 'justify',
    fontSize: 17,
    marginTop: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
});
