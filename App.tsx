import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Café do Código</Text>
          <Text style={styles.headerSubtitle}>Seu café, uma linha por vez</Text>
        </View>

        <View style={styles.avatarPlaceholder}>
          <Ionicons name="person" size={20} color="#2f2d2c"></Ionicons>
        </View>
      </View>
      {/* Header */}

      {/* Conteúdo */}
      <View style={styles.content}>
        <View style={styles.grettingSection}>
          <Text style={styles.grettingTitle}>Bom dia!</Text>
          <Text style={styles.grettingSubtitle}>Que tal um café hoje?</Text>
        </View>

        <View style={styles.featured}>
          <Image
            source={require('./assets/coffee.jpg')}
            style={styles.image}>
          </Image>
          <Text style={styles.cardTitle}>Cappucino Especial</Text>
          <Text style={styles.cardDescription}>Cremoso e delicioso</Text>
          <Text style={styles.cardPrice}>R$ 12,90</Text>
        </View>


        <Text style={styles.menuTitle}>Nosso cardápio</Text>
        <View style={styles.cardView}>{/* View Pai */}
        <View style={styles.cardItem}>
        <Text style={styles.menuCardTitle}>Espresso</Text>
        <Text style={styles.menuDescription}>Puro e forte</Text>
        <Text style={styles.menuPrice}>R$ 7,00</Text>
      </View>

      <View style={styles.cardItem}>
        <Text style={styles.menuCardTitle}>Capuccino</Text>
        <Text style={styles.menuDescription}>Clássico com espuma</Text>
        <Text style={styles.menuPrice}>R$ 12,90</Text>
      </View>

      <View style={styles.cardItem}>
        <Text style={styles.menuCardTitle}>Latte</Text>
        <Text style={styles.menuDescription}>Latte cremoso</Text>
        <Text style={styles.menuPrice}>R$ 11,50</Text>
      </View>

      <View style={styles.cardItem}>
        <Text style={styles.menuCardTitle}>Mocha</Text>
        <Text style={styles.menuDescription}>Toque de chocolate</Text>
        <Text style={styles.menuPrice}>R$ 13,50</Text>
      </View>

      
      </View>

      </View>
      {/* Conteúdo */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
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
  content: {
    paddingHorizontal: 24
  },
  grettingSection: {
    marginTop: 10,
    marginBottom: 24
  },
  grettingTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#2f2d2c"
  },
  grettingSubtitle: {
    fontSize: 16,
    color: "#9b9b9b",
    marginTop: 8
  },
  featured: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.05,
    elevation: 4,
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 188,
    borderRadius: 16,
    marginBottom: 16
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "800"
},
cardDescription: {
fontSize: 14,
color:"#9b9b9b",
marginTop: 4
},
cardPrice:{
fontSize: 20,
fontWeight: "800",
color: "#c67c4e",
marginTop: 12
},
menuTitle:{
  fontSize: 22,
  fontWeight: "800",
  color: "#2f2d2c",
  marginBottom: 16
},
cardView:{
flexDirection: "row",
flexWrap: "wrap",
justifyContent: "space-between"
},
cardItem:{
  width: "48%",
  backgroundColor: "#ffffff",
  borderRadius: 16,
  padding: 16,
  shadowColor: "#000000",
  shadowOffset: {width: 0, height: 4},
  shadowOpacity: 0.05, 
  elevation: 3,
  marginBottom: 16
},

menuCardTitle:{
fontSize: 16,
fontWeight: "700",
color: "#2f2d2c",
},

menuDescription:{
fontSize: 12,
color: "#9b9b9b",
marginTop: 4,
lineHeight: 16,
},

menuPrice:{
 fontSize: 16,
 color: "#c67c4d",
 marginTop: 12,
 fontWeight: "800"
}

})