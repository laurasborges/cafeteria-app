
import { useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CoffeCard from "./components/CoffeeCard";
import CustomButton from "./components/CustomButton";


export default function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleOrder = () => {
    if (name.trim() === '') {
      setMessage('Por favor, informe seu nome')
    } else {
      setMessage(`Olá, ${name}! Seu pedido foi recebido`)
    }
  }


  return (
    <KeyboardAvoidingView style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={30}>
      <ScrollView>

        {/* Header */}
        <Header />
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
          <View style={styles.cardView}>
            <CoffeCard
            name="Espresso"
            description="Puro e forte"
            price="7,00"
            />

             <CoffeCard
            name="Capuccino"
            description="Clássico com espuma"
            price="12,90"
            />

             <CoffeCard
            name="Latte"
            description="Leite cremoso"
            price="11,90"
            />

             <CoffeCard
            name="Mocha"
            description="Toque de chocolate"
            price="13,50"
            />
          </View>

          <View style={styles.orderSection}>
            <Text style={styles.question}>Qual é o seu nome?</Text>

            <TextInput
              style={styles.input}
              placeholder='Digite seu nome'
              value={name}
              onChangeText={setName}
            ></TextInput>

            <CustomButton title="Fazer seu pedido" onPress={handleOrder}/>
       


            {message !== '' && <Text style={styles.messageText}>{message}</Text>}
          </View>
        </View>
        {/* Conteúdo */}


        {/* Footer */}
        <Footer />
        {/* Footer */}

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
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
    shadowOffset: { width: 0, height: 8 },
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
    color: "#9b9b9b",
    marginTop: 4
  },
  cardPrice: {
    fontSize: 20,
    fontWeight: "800",
    color: "#c67c4e",
    marginTop: 12
  },
  menuTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 16
  },
  cardView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },

  orderSection: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    padding: 16,
    marginTop: 10
  },

  question: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 16
  },

  input: {
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    width: "100%",
    height: 56,
    paddingHorizontal: 20,
    fontSize: 16
  },
  messageText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#c67c4e",
    alignItems: "center",
    marginTop: 20
  }
});