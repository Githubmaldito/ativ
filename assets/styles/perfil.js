// assets/styles/perfil.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Container da tela inteira
  screenContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  
  // Container da lista
  listContainer: {
    flex: 1,
  },
  
  // Card de cada meta
  metaCard: {
    backgroundColor: '#284845',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#fff',
    flexDirection: 'row', // Isso coloca conteúdo lado a lado
    justifyContent: 'space-between', // Textos à esquerda, ícone à direita
    alignItems: 'center', // Centraliza verticalmente
  },
  
  // Container dos textos (esquerda)
  textContainer: {
    flex: 1, // Ocupa todo espaço disponível exceto o ícone
    marginRight: 12, // Espaço entre textos e ícone
  },
  
  // Título da meta
  metaTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: '#fff',
    marginBottom: 4,
  },
  
  // Descrição da meta
  metaDesc: {
    fontSize: 14,
    color: '#e0e0e0',
    marginBottom: 2,
  },
  
  // Tipo da meta
  metaType: {
    fontSize: 12,
    color: '#ffcc80',
    fontWeight: '500',
  },
  
  // Container vazio
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  
  emptyText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  
  // Ícone de check
  checkIcon: {
    // Estilo do ícone se necessário
  }
});

export default styles;