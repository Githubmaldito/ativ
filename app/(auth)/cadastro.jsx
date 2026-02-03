import { View, Text, Alert, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import styles from '../../assets/styles/cadastro.js'
import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import TEMA from '../constants/tema.js'
import { Ionicons } from '@expo/vector-icons'
import useAuth from '../funções/funcoes.js'

const Cadastro = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [showSenha, setshowSenha] = useState(false)
    // const [isLoading, setIsloading] = useState(false)
    const { user, isLoading, register, token } = useAuth();
    const router = useRouter();

    const handleCadastro = async () => {
        const result = await register(username, email, senha)
        if (!result.success){
            Alert.alert('Erro', result.message)
        } else {
            router.push('')
        }
    }

    return (

    <View style={styles.container}>
      <View style={styles.card}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.title}>Metas</Text>
        </View>

        {/* form */}
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome</Text>
            <View style={styles.inputContainer}>
              <Ionicons
                name="person-outline"
                style={styles.inputIcon}
                size={20}
                color={TEMA.primary}
              />
              <TextInput
                style={styles.input}
                placeholder="Digite o seu nome"
                value={username}
                onChangeText={setUsername}
                autoCapitalize='none'
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
              {/* ícone de email */}
              <Ionicons
                name='mail-outline'
                size={20}
                color={TEMA.primary}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Digite o seu email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* input de senha */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Senha</Text>
            <View style={styles.inputContainer}>
              <Ionicons
              style={styles.inputIcon}
                name="lock-closed-outline"
                size={20}
                color={TEMA.primary}
              />
              <TextInput
                style={styles.input}
                placeholder="Crie sua senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={!showSenha}
                autoCapitalize="none"
              />
              <Ionicons
                name={showSenha ? "eye-outline" : "eye-off-outline"}
                size={20}
                color={TEMA.primary}
                onPress={() => setshowSenha(!showSenha)}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleCadastro} disabled={isLoading}>
            {isLoading ? (
              <ActivityIndicator color={TEMA.white} />
            ) : (
              <Text style={styles.buttonText}>Cadastrar-se</Text>
            )}
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Já possui uma conta?</Text>
            <TouchableOpacity onPress={() => router.back()}>
              <Text style={styles.link}> Faça Login</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
    )
}

export default Cadastro