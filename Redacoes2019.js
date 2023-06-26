import { StatusBar } from 'expo-status-bar';
import React from 'react';
<<<<<<< HEAD
import { LinearGradient } from 'expo-linear-gradient';
=======
>>>>>>> d497d4c4e7216fd0799a56e1d1421a64836c1a94
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

export default function Redacoes2019({ navigation }) {
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
          <Text style={styles.texto}>REDAÇÃO 2019</Text>
          <Text style={styles.texto2}>TEMA: Democratização do acesso ao cinema no Brasil {'\n'}- Alana Miranda, 22 anos</Text>
          <Text style={styles.txtest}>
            ㅤㅤ"Ao longo do processo de formação da sociedade, o pensamento cinematográfico consolidou-se em diversas comunidades. No início do século XX, com os regimes totalitários, por exemplo, o cinema era utilizado como meio de dominação à adesão das massas ao governo. Embora o cinema tenha se popularizado, posteriormente, como entretenimento, nota-se, na contemporaneidade, a sua limitação social, em virtude do discurso elitizado que o compõe e da falta de acesso por parte da população. Essa visão negativa pode ser significativamente minimizada, desde que acompanhada da desconstrução coletiva, junto à redução do custo do ingresso para a maior acessibilidade.{'\n\n'}

            ㅤㅤEm primeira análise, é evidente que a herança ideológica da produção cinematográfica, como um recurso destinado às elites, conservou-se na coletividade e perpetuou a exclusão de classes inferiores. Nessa perspectiva, segundo Michel Foucault, filósofo francês, o poder articula-se em uma linguagem que cria mecanismos de controle e coerção, os quais aumentam a subordinação. Sob essa ótica, constata-se que o discurso hegemônico introduzido, na modernidade, moldou o comportamento do cidadão a acreditar que o cinema deve se restringir a determinada parcela da sociedade, o que enfraquece o princípio de que todos indivíduos têm o direito ao lazer e ao entretenimento. Desse modo, com a concepção instituída da produção cinematográfica como diversão das camadas altas, o cinema adquire o caráter elitista, o qual contribui com a exclusão do restante da população.{'\n\n'}

            ㅤㅤAlém disso, uma comunidade que restringe o acesso ao cinema, por meio do custo de ingressos, representa um retrocesso para a coletividade que preza por igualdade. Nesse sentido, na teoria da percepção do estado da sociedade, de Émile Durkheim, sociólogo francês, abrangem-se duas divisões: "normal e patológico". Seguindo essa linha de pensamento, observa-se que um ambiente patológico, em crise, rompe com o seu desenvolvimento, visto que um sistema desigual não favorece o progresso coletivo. Dessa forma, com a disponibilidade de ir ao cinema mediada pelo preço — que não leva em consideração a renda regional —, a democratização torna-se inviável.{'\n\n'}

            ㅤㅤDepreende-se, portanto, a relevância da igualdade do acesso ao cinema no Brasil. Para que isso ocorra, é necessário que o Estado proporcione a redução coerente do custo de ingressos por região, junto à difusão da importância da produção cinematográfica no cotidiano, nos meios de comunicação, por meio de anúncios, a fim de colaborar com o acesso igualitário. Ademais, a instituição educacional deve proporcionar aos indivíduos uma educação voltada à democratização coletiva do cinema, como entretenimento destinado às elites, por intermédio de debates e palestras, na área das Ciências Humanas, como forma de esclarecimento populacional. Assim, haverá um ambiente estável que colabore com a acessibilidade geral ao cinema no país."

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
    height: '10%',
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
    maxHeight: '315%',
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
