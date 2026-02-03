// import { Stack, useRouter, useSegments } from "expo-router";
// import { useEffect, useState } from "react";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { View, ActivityIndicator } from "react-native";
// import useAuth from './funções/funcoes';

// export default function RootLayout() {
//   const router = useRouter();
//   const segments = useSegments();
//   const { checkAuth, user, token, isLoading } = useAuth();
//   const [isAuthReady, setIsAuthReady] = useState(false);

//   //carrega o estado de autenticação
//   useEffect(() => {
//     const loadAuth = async () => {
//       await checkAuth();
//       setIsAuthReady(true);
//     };
    
//     loadAuth();
//   }, []);

//   useEffect(() => {
//     if (!isAuthReady) {
//       return; //esperar até ficoar pronto
//     }

//     const inAuthGroup = segments[0] === '(auth)';
//     const isSignedIn = !!(user && token);

//     console.log("Estado de autenticação:", {
//       isAuthReady,
//       isLoading,
//       inAuthGroup,
//       isSignedIn,
//       user: !!user,
//       token: !!token
//     });

//     if (!isSignedIn && !inAuthGroup) {
//       // Usuário NÃO autenticado e NÃO está na tela de auth
//       console.log("Redirecionando para login...");
//       router.replace("/(auth)");
//     } else if (isSignedIn && inAuthGroup) {
//       // Usuário autenticado e está na tela de auth
//       console.log("Redirecionando para tabs...");
//       router.replace("/(tabs)");
//     }
//   }, [segments, user, token, isAuthReady, isLoading, router]);

//   // Mostrar loading enquanto verifica autenticação
//   if (!isAuthReady || isLoading) { 
//     return (
//       <View style={{ 
//         flex: 1, 
//         justifyContent: "center", 
//         alignItems: "center",
//         backgroundColor: "#ede1d1" // Cor do seu tema
//       }}>
//         <ActivityIndicator size="large" color="#e17055" />
//       </View>
//     );
//   }

//   return (
//     <SafeAreaProvider>
//       <Stack screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="(auth)" />
//         <Stack.Screen name="(tabs)" />
//       </Stack>
//     </SafeAreaProvider>
//   );
// }

import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, ActivityIndicator } from "react-native";
import useAuth from './funções/funcoes';

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();
  const { checkAuth, user, token, isLoading } = useAuth();
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  // Carrega o estado de autenticação inicial
  useEffect(() => {
    const loadAuth = async () => {
      console.log("🔍 RootLayout: Verificando autenticação inicial...");
      await checkAuth();
      console.log("✅ RootLayout: Verificação inicial concluída");
      console.log("📊 Estado após checkAuth:", { user, token });
      setIsAuthChecked(true);
    };
    
    loadAuth();
  }, []);

  // Monitora mudanças de autenticação E segmentos
  useEffect(() => {
    // Só começa a redirecionar após a verificação inicial
    if (!isAuthChecked) {
      console.log("⏳ RootLayout: Aguardando verificação inicial...");
      return;
    }

    const inAuthGroup = segments[0] === '(auth)';
    const isSignedIn = !!(user && token);

    console.log("📊 RootLayout: Estado atualizado", {
      segment: segments[0],
      inAuthGroup,
      isSignedIn,
      user: !!user,
      token: !!token,
      isLoading
    });

    // Lógica de redirecionamento
    if (!isSignedIn && !inAuthGroup) {
      // NÃO autenticado e NÃO está na tela de auth → vai para login
      console.log("➡️ RootLayout: Indo para login (não autenticado)");
      router.replace("/(auth)");
    } else if (isSignedIn && inAuthGroup) {
      // Autenticado e está na tela de auth → vai para tabs
      console.log("➡️ RootLayout: Indo para tabs (autenticado)");
      router.replace("/(tabs)");
    }
    // Casos que não redirecionam:
    // - Autenticado e já está em tabs → OK
    // - Não autenticado e já está em auth → OK
    
  }, [segments, user, token, isAuthChecked, isLoading, router]);

  // Mostrar loading durante verificação inicial
  if (!isAuthChecked || isLoading) {
    console.log("🌀 RootLayout: Mostrando tela de loading");
    return (
      <View style={{ 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: "#ede1d1"
      }}>
        <ActivityIndicator size="large" color="#e17055" />
      </View>
    );
  }

  console.log("🎬 RootLayout: Renderizando navegação");
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </SafeAreaProvider>
  );
}