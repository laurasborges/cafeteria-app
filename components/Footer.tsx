import { StyleSheet, Text, View } from "react-native";

export default function Footer(){
    return(
        <View style={styles.footer}>
              <Text style={styles.footerText}> Cafeteria da Laura</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
    padding: 20,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10
  },

  footerText:{
    fontSize: 14,
    fontWeight: "600",
    color: "#9b9b9b",
  }
})