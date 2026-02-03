// sem esse index, dá ruim nas rotas
import { Redirect } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Redireciona para a tela de login inicialmente
  // O RootLayout vai ajustar isso depois
  return <Redirect href="/(auth)" />;
}