import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

export default function Redacoes2022({ navigation }) {
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
          <Text style={styles.texto}>REDAÇÃO 2022</Text>
          <Text style={styles.texto2}>TEMA: Desafios para a valorização de comunidades e povos tradicionais no Brasil {'\n'}- Luís Felipe de Brito, 24 anos</Text>
          <Text style={styles.txtest}>
            ㅤㅤ"O poeta modernista Oswald de Andrade relata, em "Erro de Português", que, sob um dia de chuva, o índio foi vestido pelo português - uma denúncia à aculturação sofrida pelos povos indígenas com a chegada dos europeus ao território brasileiro. Paralelamente, no Brasil atual, há a manutenção de práticas prejudiciais não só aos silvícolas, mas também aos demais povos e comunidades tradicionais, como os pescadores. Com efeito, atuam como desafios para a valorização desses grupos a educação deficiente acerca do tema e a ausência do desenvolvimento sustentável.

            ㅤㅤDiante desse cenário, existe a falta da promoção de um ensino eficiente sobre as populações tradicionais. Sob esse viés, as escolas, ao abordarem tais povos por meio de um ponto de vista histórico eurocêntrico, enraízam no imaginário estudantil a imagem de aborígenes cujas vivências são marcadas pela defasagem tecnológica. A exemplo disso, há o senso comum de que os indígenas são selvagens, alheios aos benefícios do mundo moderno, o que, consequentemente, gera um preconceito, manifestado em indagações como “o índio tem ‘smartphone’ e está lutando pela demarcação de terras?” – ideia essa que deslegitima a luta dos silvícolas. Entretanto, de acordo com a Teoria do Indigenato, defendida pelo ministro Edson Fachin, do Supremo Tribunal Federal, o direito dos povos tradicionais à terra é inato, sendo anterior, até, à criação do Estado brasileiro. Dessa forma, por não ensinarem tal visão, os colégios fometam a desvalorização das comunidades tradicionais, mediante o desenvolvimento de um pensamento discriminatório nos alunos.

            ㅤㅤAlém disso, outro desafio para o reconhecimento desses indivíduos é a carência do progresso sustentável. Nesse contexto, as entidades mercadológicas que atuam nas áreas ocupadas pelas populações tradicionais não necessariamente se preocupam com a sua preservação, comportamento no qual se valoriza o lucro em detrimento da harmonia entre a natureza e as comunidades em questão. À luz disso, há o exemplo do que ocorre aos pescadores, cujos rios são contaminados devido ao garimpo ilegal, extremamente comum na Região Amazônica. Por conseguinte, o povo que sobrevive a partir dessa atividade é prejudicado pelo que a Biologia chama de magnificação trófica, quando metais pesados acumulam-se nos animais de uma cadeia alimentar – provocando a morte de peixes e a infecção de humanos por mercúrio. Assim, as indústrias que usam os recursos naturais de forma irresponsável não promovem o desenvolvimento sustentável e agem de maneira nociva às sociedades tradicionais.

            ㅤㅤPortanto, é essencial que o governo mitigue os desafios supracitados. Para isso, o Ministério da Educação – órgão responsável pelo estabelecimento da grade curricular das escolas – deve educar os alunos a respeito dos empecilhos à preservação dos indígenas, por meio da inserção da matéria “Estudos Indigenistas” no ensino básico, a fim de explicar o contexto dos silvícolas e desconstruir o preconceito. Ademais, o Ministério do Desenvolvimento – pasta instituidora da Política Nacional de Desenvolvimento Sustentável dos Povos e Comunidades Tradicionais – precisa fiscalizar as atividades econômicas danosas às sociedades vulneráveis, visando à valorização de tais pessoas, mediante canais de denúncias."
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
