import { View, Text, TouchableOpacity, Alert, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import useAuth from '../funções/funcoes'
import { useRouter } from 'expo-router'
import styles from '../../assets/styles/perfil' // Mude para o novo estilo
import { API_URL } from '../constants/url'
import { Ionicons } from '@expo/vector-icons'

const Perfil = () => {
  const { token } = useAuth()
  const [metas, setMetas] = useState([]) // Começa com array vazio
  const [isLoading, setIsLoading] = useState(true) // 'true' é booleano, não string
  const router = useRouter()
  const {logout} = useAuth()


  const fetchMetas = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${API_URL}/metas/user`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      
      if (!response.ok) {
        throw new Error('Erro ao buscar metas')
      }
      
      const data = await response.json()
      setMetas(data)
    } catch (error) {
      Alert.alert("Erro", "Falha ao carregar metas.")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  } 

  useEffect(() => {
    fetchMetas()
  }, [])

  const renderMeta = ({ item }) => (
    <View style={styles.metaCard}>
      {/* Lado ESQUERDO: Textos */}
      <View style={styles.textContainer}>
        <Text style={styles.metaTitle}>{item.nome}</Text>
        <Text style={styles.metaDesc} numberOfLines={2}>
          {item.desc || "Sem descrição"}
        </Text>
        <Text style={styles.metaType}>
          {item.tipo || "Sem tipo definido"}
        </Text>
      </View>
      
      {/* Lado DIREITO: Ícone */}
      <Ionicons 
        name={item.concluida ? 'checkmark-circle' : 'checkmark-circle-outline'} 
        size={40} 
        color={item.concluida ? '#4CAF50' : '#ccc'} 
      />
    </View>
  )

  return (
    <View style={styles.screenContainer}>
      <FlatList 
        data={metas}
        renderItem={renderMeta}
        keyExtractor={(item) => item._id || item.id}
        contentContainerStyle={styles.listContainer}
        refreshing={isLoading}
        onRefresh={fetchMetas}
        ListEmptyComponent={
          !isLoading ? (
            <View style={styles.emptyContainer}>
              <Ionicons name='checkmark-circle-outline' size={60} color="#ccc" />
              <Text style={styles.emptyText}>Você não criou nenhuma meta</Text>
              <TouchableOpacity 
                style={{ marginTop: 20 }}
                onPress={() => router.push('/criar-meta')} // Ajuste conforme sua rota
              >
                <Text style={{ color: '#284845', fontWeight: 'bold' }}>
                  Criar primeira meta
                </Text>
              </TouchableOpacity>
            </View>
          ) : null
        }
      />
      <View>
        <TouchableOpacity onPress={logout()}>
          <Text>SAIR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Perfil