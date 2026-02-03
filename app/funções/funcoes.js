import { create } from 'zustand'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL } from '../constants/url'

const useAuth = create((set) => ({
    // vai usar o zustand crate pra montar o user e suas coisas
    user: null,
    token: null,
    isLoading: false,

    register: async (username, email, senha) => {
        set({ isLoading: true })
        try {
            // pega arota definida em authRoute
            const response = await fetch(`${API_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, senha })
            })

            const data = await response.json()
            // se nao der certo
            if (!response.ok) {
                throw new Error(data.message || "Erro no cadastro.")
            }
            // dando certo
            await AsyncStorage.setItem('user', JSON.stringify(data.user))
            await AsyncStorage.setItem('token', data.token)

            // user e token sao montados apos criacao
            set({ user: data.user, token: data.token, isLoading: false })
            return { success: true, message: 'Cadastro realizado.' }
        } catch (error) {
                console.log('problema n9 useAuth, registro')
            set({ isLoading: false })
            return { 
                success: false, message: error.message,
            }
        }
    },

    login: async (email, senha) => {
        set({ isLoading: true })
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, senha })
            })
            const data = await response.json()
            if (!response.ok) throw new Error(data.message)

            await AsyncStorage.setItem('user', JSON.stringify(data.user))
            await AsyncStorage.setItem('token', data.token)

            set({ user: data.user, token: data.token, isLoading: false })
            return { success: true, message: 'Login realizado.' }

        } catch (error) {
            console.log('problema no login do useAuth')
            set({ isLoading: false })
            return { success: false, message: error.message }
        }
    },

    // No seu arquivo funcoes.js, atualize a função checkAuth:
    checkAuth: async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const userJson = await AsyncStorage.getItem('user');
            const user = userJson ? JSON.parse(userJson) : null;

            // Verifique se o token é válido (opcional: pode fazer uma requisição ao backend)
            if (token && user) {
                // Pode fazer uma validação com o backend aqui se necessário
                console.log('Usuário autenticado encontrado:', user.username);
            }

            set({ user, token });

        } catch (error) {
            console.log('Erro ao verificar autenticação:', error);
            set({ user: null, token: null });
        }
    },
    logout: async () => {
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("user");
        set({ token: null, user: null });
    },

}))

export default useAuth