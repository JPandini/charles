import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { View, TextInput, Button, Alert, TouchableOpacity, Text } from 'react-native';

export default function CadastroMari() {

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica para autenticação de login
    console.log('Login:', email, password);
  };

  const handleRegister = () => {
    // Lógica para cadastro de usuário
    console.log('Cadastro:', email, password);
  };

const handleCreateAccount = ()=> {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log('Conta criada')
    const user = userCredential.user;
    console.log(user)
  })
  .catch(error => {
    console.log(error)
    Alert.alert(error.message)
  })
}

const handleSignIn = () => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log('usuario logado')
    const user = userCredential.user;
    console.log(user)
  })
  .catch(error => {
    console.log(error)
    Alert.alert(error.message)
  })
}


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
        style={{ width: 200, height: 40, borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => {
        setPassword(text); 
        }}
        style={{ width: 200, height: 40, borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <TouchableOpacity onPress={handleSignIn}>
        <Text>Logar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCreateAccount}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

