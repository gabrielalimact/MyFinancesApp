import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '../styles/Colors';

export default function App() {
  const router = useRouter();
  const handlePress = () => {
    router.push('/home');
  }
  return (
    <View style={styles.container}>
      <View style={styles.backgroundImageFixed}>
        <Image source={require('../assets/images/banner.png')} style={styles.image} />
      </View>
      <View style={styles.textsView}>
        <Text style={styles.title}>Tenha controle dos seus gastos</Text>
        <Text style={styles.subtitle}>Acompanhe seus gastos, defina metas financeiras e tenha o controle total das suas finanças pessoais em um só lugar.</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Entre na sua conta</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Não tem uma conta? <Text style={styles.link}>Crie uma conta</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBackground,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImageFixed: {
    height: 300,
    width: 380,
    backgroundColor: COLORS.secondaryBackground,
    borderRadius: 20,
  },
  image: {
    height: 350,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  textsView: {
    marginTop: 80,
    gap: 20,
  },
  title: {
    fontSize: 36,
    fontFamily: 'medium',
    textAlign: 'justify',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'justify',
    fontFamily: 'regular',
  },
  button: {
    backgroundColor: COLORS.secondaryBackground,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'regular',
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: 'regular',
    textAlign: 'center',
  },
  link: {
    fontFamily: 'medium',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});