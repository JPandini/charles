import { StatusBar } from 'expo-status-bar';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import * as Font from 'expo-font';

import Cadastro from './Cadastro';
import Home from './Home';


export default function Login({ navigation }) {
  const [fontLoaded, setFontLoaded] = React.useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Pompiere': require('./assets/fonts/Pompiere.ttf'),
        'Rosario': require('./assets/fonts/Rosario.ttf'),
      });
      setFontLoaded(true);
    };
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate(Home)
      })
      .catch(error => {
        console.log(error);
        Alert.alert('Dados do usuário inválido.');
      });
  };


  

  return (
      <LinearGradient style={styles.container}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#D77DFE','#ECBBFF', '#D667FF']}>
      <Image style={styles.img} source={require('./assets/LogoS.png')} />

      <View style={styles.inputContainer}>
        <TextInput style={styles.txtInput}
          placeholder='Email'
          value={email}
          placeholderTextColor="rgba(255, 255, 255, 0.9)"
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput style={styles.txtInput}
          placeholder='Senha'
          placeholderTextColor="rgba(255, 255, 255, 0.9)"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity
        onPress={handleSignIn}
        style={styles.btn}
        activeOpacity={0.8}>
        <Text style={styles.txtbtn}>ENTRAR</Text>
      </TouchableOpacity> 


      <TouchableOpacity style={styles.btn1}
        onPress={() => navigation.navigate(Cadastro)}>
        <Text style={styles.txtbtn1}>Não possui cadastro?</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D166FF',
  },

  img: {
    height: '25%',
    width: '40%',
    marginBottom: '10%',
  },

  inputContainer: {
    width: '70%',
    marginBottom: '10%',
  },

  txtInput: {
    width: '100%',
    height: 60,
    color: 'white',
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    marginBottom: 20,
    letterSpacing: 2,
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Pompiere',
    fontSize: 28,
  },

  btn: {
    padding: 15,
    paddingHorizontal: 80,
    backgroundColor: '#ffffff',
    borderRadius: 37,
    borderColor: '#000',
    borderWidth: 2,
    marginBottom: 10,
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

  btn1: {
    paddingVertical: 10,
  },

  txtbtn1: {
    fontFamily: 'Rosario',
    fontSize: 20,
    color: 'white',
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
  },
});
