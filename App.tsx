import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Café do Código</Text>
          <Text style={styles.headerSubtitle}>Seu café, uma linha por vez</Text>
        </View>
        <View style={styles.avatarPlaceholder}>
          <Ionicons name='person' size={20} color="#2f2d2c"></Ionicons>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.main}>
          <View>
            <Text style={styles.mainTitle}>Bom dia!</Text>
            <Text style={styles.mainSubtitle}>Que tal um café hoje?</Text>
          </View>
        </View>

        <View style={styles.featured}>
          <Image style={styles.image} source={require('./assets/coffee.jpg')}></Image>
          <Text>Cappucino Especial</Text>
          <Text>Cremoso e delicioso</Text>
          <Text>R$ 12,90</Text>
        </View></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f8'
  },

  header: {
    width: '100%',
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2f2d2c"
  },

  headerSubtitle: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 4
  },

  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center"
  },

  main: {
    paddingBottom: 20,
  },

  mainTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#2f2d2c"
  },

  mainSubtitle: {
    fontSize: 16,
    color: "#9b9b9b",
    marginTop: 8
  },

  content: {
    padding: 24
  },

  featured: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginBottom: 32
  },

  image:{
    width: "100%",
    height: 188,
    borderRadius: 16,
    marginBottom: 16
  }
})