import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyTabs from '../../components/BottomTabNavigation';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.title}>Olá, @User</Text>
        <TouchableOpacity>
          <Text style={styles.text}>Sair</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.text}>Bem-vindo ao app!</Text>
      </View>
    </SafeAreaView>
  );
}
