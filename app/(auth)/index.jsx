

import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from '../../assets/styles/main'
import { router } from 'expo-router'
import TEMA from '../constants/tema'
import { Ionicons } from '@expo/vector-icons'
import useAuth from '../funções/funcoes'

const Login = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [showSenha, setShowSenha] = useState(false)
  const { login, isLoading } = useAuth()

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos')
      return
    }

    const result = await login(email, senha)
    if (!result.success) {
      Alert.alert('Erro', result.message)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Metas, simplesmente Metas</Text>
          <Text style={styles.sub}>Essa é a tela de LOGIN</Text>
        </View>

        <View style={styles.formContainer}>
          {/* Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
              <Ionicons
                name='mail-outline'
                size={20}
                color={TEMA.primary}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Senha */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Senha</Text>
            <View style={styles.inputContainer}>
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color={TEMA.primary}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={!showSenha}
                autoCapitalize="none"
              />
              <Ionicons
                name={showSenha ? "eye-outline" : "eye-off-outline"}
                size={20}
                color={TEMA.primary}
                onPress={() => setShowSenha(!showSenha)}
              />
            </View>
          </View>

          {/* Botão Login */}
          <TouchableOpacity 
            style={[styles.button, isLoading && styles.buttonDisabled]} 
            onPress={handleLogin} 
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>
              {isLoading ? 'Entrando...' : 'Entrar'}
            </Text>
          </TouchableOpacity>

          {/* Link para Cadastro */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Não tem uma conta?</Text>
            <TouchableOpacity style={styles.botaoCad} onPress={() => router.push("/(auth)/cadastro")}>
              <Text style={styles.link}> Cadastre-se aqui</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Login